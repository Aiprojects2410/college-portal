<html><head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Photo Search | Result Portal</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<style type="text/css">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese");

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif; 
  }
  .main-container{
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(21, 143, 185, 0.25);
  min-height: 100vh;
}
.inner-container{
  width: 1000px;
  height: auto;
  margin: auto;
  padding: 40px 50px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
.inner-container h1{
  margin: 0px;
  text-align: center;
  font-size: 26px;
  color: #158fb9;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
}
.search-box-mndiv{
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 25px;
}
.srch-cntr{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
}
.srch-bar{
  flex: 3;
}
.srch-bar .form-control{
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
  box-sizing: border-box;
}
.srch-sem{
  flex: 1.5;
}
.srch-sem .form-control{
  width: 100%;
  height: 42px;
  box-shadow: none;
  outline: 0 none;
  border: 1px solid #d6daea;
  border-right: 0px;
  font-size: 13px;
  font-weight: 500;
  color: #001737;
  padding: 8px 12px;
  box-sizing: border-box;
  background: #fbfcfe;
  cursor: pointer;
}
.srch-btn{
  width: 140px;
}
.srch-btn .btn{
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
.srch-btn .btn:hover{
  background: #158fb9;
  border-color: #158fb9;
}
.preview-mn-div{
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 35px;
  background: #eff9f9;
  padding: 20px;
  box-sizing: border-box;
  min-height: 450px;
}
.preview-innr-div{
  width: 100%;
  height: auto;
  margin: auto;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  min-height: 420px;
}
.preview-innr-div h4{
  margin: 0px;
  text-align: left;
  font-size: 15px;
  color: #158fb9;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 1px;
}

.image-box{
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 5px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-box img{
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
</head>
<body>

  <div class="main-container">
    <div class="inner-container">
      <h1>BRAJ SAGAR DEGREE COLLEGE, PURAILA, ETAWAH (U.P.)</h1>
      <div class="search-box-mndiv">
        <div class="srch-cntr">
          <!-- Roll Number Input -->
          <div class="srch-bar">
            <input type="text" id="serachimages" class="form-control" placeholder="Enter Roll Number">
          </div>
          <!-- Semester Selector -->
          <div class="srch-sem">
            <select id="searchSemester" class="form-control">
              <option value="1">Semester / Year 1</option>
              <option value="2">Semester / Year 2</option>
              <option value="3" selected>Semester / Year 3</option>
              <option value="4">Semester / Year 4</option>
              <option value="5">Semester / Year 5</option>
              <option value="6">Semester / Year 6</option>
            </select>
          </div>
          <!-- Search Button -->
          <div class="srch-btn">
            <button type="button" onclick="searchinRepo();" class="btn btn-dark">Search</button>
          </div>
        </div>
      </div>
      <div class="preview-mn-div">
        <div class="preview-innr-div">
          <!-- Official PDF Marksheet Viewer (GEHURA Benchmark) -->
          <div id="pdfContainer" style="display: none; width: 100%;">
            <div style="background: #0e334e; color: #fff; padding: 10px 18px; border-radius: 4px 4px 0 0; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <span style="font-size: 14px; font-weight: 600;"><i class="fa fa-file-pdf" style="color: #ff5252; margin-right: 6px;"></i> Official Marksheet Document (Vector PDF)</span>
              <div style="display: flex; gap: 8px;">
                <a id="pdfOpenBtn" href="#" target="_blank" class="btn btn-sm" style="background: #158fb9; color: #fff; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 3px; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                  <i class="fa fa-external-link-alt"></i> Fullscreen
                </a>
                <a id="pdfDownloadBtn" href="#" download class="btn btn-sm" style="background: #2e7d32; color: #fff; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 3px; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                  <i class="fa fa-download"></i> Download PDF
                </a>
              </div>
            </div>
            <iframe id="pdfFrame" src="" style="width: 100%; height: 950px; border: 1px solid #0e334e; border-top: none; background: #525659; border-radius: 0 0 4px 4px; display: block;"></iframe>
          </div>

          <div id="imageContainer" class="image-box">
            <img id="imgsrc" src="img/noimage.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
  function searchinRepo(){
    var roll = $("#serachimages").val().trim();
    var sem = $("#searchSemester").val();

    if(roll == ""){
      alert("please enter roll number");
      $("#serachimages").focus();
      return;
    }

    var candidates = [
      { url: 'img/' + roll + '_sem' + sem + '.pdf', type: 'pdf' },
      { url: 'img/' + roll + '.pdf', type: 'pdf' },
      { url: 'img/' + roll + '_sem' + sem + '.jpg.png', type: 'image' },
      { url: 'img/' + roll + '_sem' + sem + '.jpg', type: 'image' },
      { url: 'img/' + roll + '_sem' + sem + '.png', type: 'image' },
      { url: 'img/' + roll + '.jpg', type: 'image' },
      { url: 'img/' + roll + '.png', type: 'image' }
    ];

    function checkCandidate(index) {
      if (index >= candidates.length) {
        $("#pdfContainer").hide();
        $("#imageContainer").show();
        $("#imgsrc").attr('src', 'img/noimage.jpg');
        return;
      }

      var item = candidates[index];

      if (item.type === 'pdf') {
        fetch(item.url, { method: 'HEAD' })
          .then(function(res) {
            if (res.ok) {
              $("#imageContainer").hide();
              $("#pdfFrame").attr('src', item.url);
              $("#pdfOpenBtn").attr('href', item.url);
              $("#pdfDownloadBtn").attr('href', item.url);
              $("#pdfContainer").show();
            } else {
              checkCandidate(index + 1);
            }
          })
          .catch(function() {
            checkCandidate(index + 1);
          });
      } else {
        var img = new Image();
        img.onload = function() {
          $("#pdfContainer").hide();
          $("#imgsrc").attr('src', item.url);
          $("#imageContainer").show();
        };
        img.onerror = function() {
          checkCandidate(index + 1);
        };
        img.src = item.url;
      }
    }

    checkCandidate(0);
  }

  document.getElementById("serachimages").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      searchinRepo();
    }
  });

  document.getElementById("searchSemester").addEventListener("change", function() {
    if ($("#serachimages").val().trim() !== "") {
      searchinRepo();
    }
  });
  </script>
</body></html>
