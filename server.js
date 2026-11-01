const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const PUBLIC_DIR = path.resolve(__dirname);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.php': 'text/html; charset=utf-8',
  '.pdf': 'application/pdf',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Only allow GET and HEAD requests
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
    return;
  }

  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  // Prevent directory traversal attacks
  let safePath;
  try {
    const decodedUrl = decodeURIComponent(reqUrl);
    safePath = path.normalize(path.join(PUBLIC_DIR, decodedUrl));
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return;
  }

  // Ensure resolved path is strictly within PUBLIC_DIR
  if (!safePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden: Access Denied');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (fs.existsSync(safePath + '.html')) {
        safePath = safePath + '.html';
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Standard Web Security Headers
    res.writeHead(200, {
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Access-Control-Allow-Origin': '*'
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const readStream = fs.createReadStream(safePath);
    readStream.on('error', () => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    });
    readStream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Local secure development server running at http://localhost:${PORT}/`);
  console.log(`- CSJMU Main: http://localhost:${PORT}/index.html`);
  console.log(`- Affiliated Colleges: http://localhost:${PORT}/affiliated-colleges-list.html`);
  console.log(`- College Portal: http://localhost:${PORT}/braj-sagar-college.html`);
  console.log(`- Result Search: http://localhost:${PORT}/braj-sagar-result.html`);
});
