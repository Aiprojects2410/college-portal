<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Photo Search | BRAJ SAGAR DEGREE COLLEGE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style type="text/css">
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese");

    * { box-sizing: border-box; }
    body {
      margin: 0px;
      padding: 0px;
      font-family: 'Open Sans', sans-serif; 
      background: rgba(21, 143, 185, 0.25);
      min-height: 100vh;
    }
    .main-container {
      width: 100%;
      height: 100%;
      margin: auto;
      padding-bottom: 40px;
    }
    .inner-container {
      width: 1000px;
      max-width: 95%;
      height: auto;
      margin: auto;
      padding: 40px 50px;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }
    .inner-container h1 {
      margin: 0px;
      text-align: center;
      font-size: 26px;
      color: #158fb9;
      font-weight: 600;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
    .search-box-mndiv {
      width: 100%;
      height: auto;
      margin: auto;
      margin-top: 25px;
    }
    .srch-cntr {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .srch-bar {
      flex: 1;
    }
    .srch-bar .form-control {
      width: 100%;
      height: 42px;
      box-shadow: none;
      outline: 0 none;
      border: 1px solid #d6daea;
      border-right: 0px;
      font-size: 13.5px;
      font-weight: 400;
      border-radius: 3px 0px 0px 3px;
      color: #001737;
      padding: 8px 16px;
    }
    .srch-btn {
      width: 140px;
    }
    .srch-btn .btn {
      width: 140px;
      height: 42px;
      border-radius: 0px 3px 3px 0px;
      box-shadow: none;
      outline: 0 none;
      border: 1px solid #0e334e;
      line-height: 42px;
      font-size: 15px;
      font-weight: 600;
      background: rgba(14, 51, 78, 0.85);
      color: #fff;
      padding: 0px;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .srch-btn .btn:hover {
      background: #158fb9;
      border-color: #158fb9;
    }
    .preview-mn-div {
      width: 100%;
      height: auto;
      margin: auto;
      margin-top: 35px;
      background: #eff9f9;
      padding: 20px;
      min-height: 450px;
    }
    .preview-innr-div {
      width: 100%;
      height: auto;
      margin: auto;
      background: #fff;
      padding: 15px;
      min-height: 420px;
    }
    .action-toolbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #edf2f5;
    }
    .btn-print {
      height: 38px;
      border-radius: 3px;
      border: 1px solid #158fb9;
      background: #158fb9;
      color: #fff;
      font-size: 13.5px;
      font-weight: 600;
      padding: 0 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      transition: all 0.2s;
    }
    .btn-print:hover {
      background: #0e334e;
      border-color: #0e334e;
    }
    .image-box {
      width: 100%;
      height: auto;
      margin: auto;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-box img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    /* Print / PDF Default Landscape 1-Page Format */
    @page {
      size: landscape;
      margin: 0;
    }
    @media print {
      html, body {
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        overflow: hidden !important;
      }
      .main-container, .inner-container, .preview-mn-div, .preview-innr-div, .image-box {
        width: 100% !important;
        max-width: 100% !important;
        height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }
      h1, .search-box-mndiv, .action-toolbar {
        display: none !important;
      }
      .image-box img {
        max-width: 100vw !important;
        max-height: 100vh !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        display: block !important;
        margin: auto !important;
        page-break-inside: avoid !important;
        page-break-after: avoid !important;
        page-break-before: avoid !important;
      }
    }
  </style>
</head>
<body>

  <div class="main-container">
    <div class="inner-container">
      <h1>BRAJ SAGAR DEGREE COLLEGE, PURAILA, ETAWAH (U.P.)</h1>
      <div class="search-box-mndiv">
        <div class="srch-cntr">
          <!-- Roll Number Input (Blank initially) -->
          <div class="srch-bar">
            <input type="text" id="serachimages" class="form-control" placeholder="Enter Roll Number" value="">
          </div>
          <!-- Search Button -->
          <div class="srch-btn">
            <button type="button" onclick="searchinRepo();" class="btn btn-dark">Search</button>
          </div>
        </div>
      </div>
      <div class="preview-mn-div">
        <div class="preview-innr-div">
          <!-- Print Toolbar (matches design, hidden in print output) -->
          <div class="action-toolbar" id="toolbarPrint">
            <button type="button" onclick="printMarksheet();" class="btn-print" title="Print or Save as PDF in Landscape">
              <i class="fa fa-print"></i> Print / Save as PDF
            </button>
          </div>

          <div id="imageContainer" class="image-box">
            <!-- Displays noimage.jpg by default -->
            <img id="imgsrc" src="img/noimage.jpg" alt="Result">
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
  function searchinRepo() {
    var roll = $("#serachimages").val().trim();

    if (roll === "") {
      alert("Please enter roll number");
      $("#serachimages").focus();
      return;
    }

    var candidates = [
      'img/' + roll + '.png',
      'img/' + roll + '.jpg',
      'img/' + roll + '.jpeg',
      'img/' + roll + '.webp',
      'img/' + roll + '_result.png',
      'img/' + roll + '_result.jpg',
      'img/' + roll + '_sem3.png',
      'img/' + roll + '_sem3.jpg'
    ];

    function checkCandidate(index) {
      if (index >= candidates.length) {
        $("#imgsrc").attr('src', 'img/noimage.jpg');
        alert("No marksheet found for Roll Number: " + roll);
        return;
      }

      var candidateUrl = candidates[index];
      var img = new Image();
      img.onload = function() {
        $("#imgsrc").attr('src', candidateUrl);
      };
      img.onerror = function() {
        checkCandidate(index + 1);
      };
      img.src = candidateUrl;
    }

    checkCandidate(0);
  }

  function printMarksheet() {
    var imgSrc = document.getElementById("imgsrc").getAttribute("src");
    if (!imgSrc || imgSrc.indexOf("noimage.jpg") !== -1) {
      alert("Please search a student Roll Number before printing.");
      $("#serachimages").focus();
      return;
    }
    window.print();
  }

  document.getElementById("serachimages").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      searchinRepo();
    }
  });
  </script>
</body>
</html>
