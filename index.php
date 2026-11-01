<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Result Search | Braj Sagar Degree College</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style type="text/css">
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=latin-ext");

    * { box-sizing: border-box; }
    body {
      margin: 0px;
      padding: 0px;
      font-family: 'Open Sans', Arial, sans-serif; 
      background: rgba(21, 143, 185, 0.25);
      min-height: 100vh;
    }
    .main-container {
      width: 100%;
      min-height: 100vh;
      margin: auto;
      padding: 30px 15px 50px;
    }
    .inner-container {
      width: 100%;
      max-width: 980px;
      margin: auto;
      padding: 35px 40px;
      background: #fff;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border-radius: 6px;
    }
    .inner-container h1 {
      margin: 0 0 8px 0;
      text-align: center;
      font-size: 24px;
      color: #158fb9;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .sub-title {
      text-align: center;
      font-size: 14px;
      color: #666;
      margin: 0 0 25px 0;
      font-weight: 600;
    }
    .search-box-mndiv {
      width: 100%;
      max-width: 650px;
      margin: 0 auto 25px;
    }
    .srch-cntr {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .srch-bar {
      flex: 1;
    }
    .srch-bar .form-control {
      width: 100%;
      height: 46px;
      outline: 0 none;
      border: 1px solid #158fb9;
      border-right: none;
      font-size: 15px;
      font-weight: 500;
      border-radius: 4px 0px 0px 4px;
      color: #001737;
      padding: 10px 18px;
    }
    .srch-bar .form-control:focus {
      background: #fbfdff;
    }
    .srch-btn {
      width: 140px;
    }
    .srch-btn .btn {
      width: 100%;
      height: 46px;
      border-radius: 0px 4px 4px 0px;
      outline: 0 none;
      border: 1px solid #0e334e;
      line-height: 44px;
      font-size: 15px;
      font-weight: 600;
      background: #0e334e;
      color: #fff;
      padding: 0px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .srch-btn .btn:hover {
      background: #158fb9;
      border-color: #158fb9;
    }
    .preview-mn-div {
      width: 100%;
      background: #f4fbfd;
      padding: 25px;
      border-radius: 6px;
      border: 1px solid #e1eff5;
      display: none;
    }
    .preview-innr-div {
      width: 100%;
      background: #fff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }
    .status-text {
      font-size: 14px;
      font-weight: 600;
      color: #0e334e;
    }
    .print-btn {
      background: #158fb9;
      color: #fff;
      border: none;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .print-btn:hover {
      background: #0e334e;
    }
    .image-box {
      width: 100%;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fafafa;
      padding: 15px;
      border-radius: 4px;
      border: 1px dashed #d1e3ea;
    }
    .image-box img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      box-shadow: 0 3px 12px rgba(0,0,0,0.1);
      border-radius: 2px;
    }

    .placeholder-prompt {
      text-align: center;
      padding: 60px 20px;
      background: #fbfdff;
      border: 2px dashed #d7e8f0;
      border-radius: 6px;
      color: #6a8292;
      margin-top: 10px;
    }
    .placeholder-prompt i {
      font-size: 48px;
      color: #158fb9;
      margin-bottom: 14px;
      display: block;
    }
    .placeholder-prompt h3 {
      font-size: 18px;
      color: #0e334e;
      margin: 0 0 8px 0;
      font-weight: 600;
    }
    .placeholder-prompt p {
      font-size: 14px;
      margin: 0;
    }

    @media print {
      body {
        background: #fff;
      }
      .inner-container {
        box-shadow: none;
        padding: 0;
        max-width: 100%;
      }
      .search-box-mndiv, .action-bar, .sub-title, h1, .placeholder-prompt {
        display: none !important;
      }
      .preview-mn-div {
        background: transparent;
        padding: 0;
        border: none;
        display: block !important;
      }
      .preview-innr-div {
        padding: 0;
        box-shadow: none;
      }
      .image-box {
        padding: 0;
        border: none;
        background: transparent;
      }
      .image-box img {
        max-width: 100%;
        box-shadow: none;
      }
    }
    @media (max-width: 768px) {
      .inner-container {
        padding: 20px 15px;
      }
      .inner-container h1 {
        font-size: 19px;
      }
      .preview-mn-div {
        padding: 12px;
      }
      .preview-innr-div {
        padding: 10px;
      }
    }
  </style>
</head>
<body>

  <div class="main-container">
    <div class="inner-container">
      <h1>BRAJ SAGAR DEGREE COLLEGE, PURAILA, ETAWAH (U.P.)</h1>
      <p class="sub-title">Student Statement of Marks / Result Portal</p>

      <div class="search-box-mndiv">
        <div class="srch-cntr">
          <!-- Direct Roll Number Input (Blank Initially) -->
          <div class="srch-bar">
            <input type="text" id="serachimages" class="form-control" placeholder="Enter Roll Number to search marksheet..." value="" autofocus>
          </div>
          <!-- Direct Search Button -->
          <div class="srch-btn">
            <button type="button" onclick="searchinRepo();" class="btn"><i class="fa fa-search"></i> Search</button>
          </div>
        </div>
      </div>

      <!-- Initial Blank Placeholder Prompt -->
      <div id="initialPrompt" class="placeholder-prompt">
        <i class="fa fa-search-plus"></i>
        <h3>Search Student Result</h3>
        <p>Please enter the student's Roll Number in the search box above and click <b>Search</b> to view the Statement of Marks.</p>
      </div>

      <!-- Result View (Hidden Initially, Displayed Only on Search) -->
      <div class="preview-mn-div" id="resultPreviewContainer">
        <div class="preview-innr-div">
          <div class="action-bar" id="actionBar">
            <span class="status-text" id="statusLabel"><i class="fa fa-id-card"></i> Marksheet View</span>
            <button type="button" class="print-btn" onclick="window.print();"><i class="fa fa-print"></i> Print Marksheet</button>
          </div>

          <div id="imageContainer" class="image-box">
            <img id="imgsrc" src="" alt="Marksheet">
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

    // Hide the initial placeholder and show the result view
    $("#initialPrompt").hide();
    $("#resultPreviewContainer").show();
    $("#statusLabel").html('<i class="fa fa-spinner fa-spin"></i> Searching marksheet for Roll No: <b>' + roll + '</b>...');

    // Candidates to check for this roll number
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
        // Fallback: no image found for this roll number
        $("#imgsrc").attr('src', 'img/noimage.jpg');
        $("#statusLabel").html('<i class="fa fa-exclamation-triangle" style="color: #e65100;"></i> No marksheet found for Roll No: <b>' + roll + '</b>');
        return;
      }

      var candidateUrl = candidates[index];
      var img = new Image();
      img.onload = function() {
        $("#imgsrc").attr('src', candidateUrl);
        $("#statusLabel").html('<i class="fa fa-check-circle" style="color: #2e7d32;"></i> Displaying Marksheet for Roll No: <b>' + roll + '</b>');
      };
      img.onerror = function() {
        checkCandidate(index + 1);
      };
      img.src = candidateUrl;
    }

    checkCandidate(0);
  }

  document.getElementById("serachimages").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      searchinRepo();
    }
  });
  </script>
</body>
</html>
