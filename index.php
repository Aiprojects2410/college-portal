<html><head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Photo Search</title>
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
  padding: 50px;
  background: #fff;
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
  margin-top: 30px;
}
.srch-cntr{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.srch-item{
  width: auto;
  height: auto;
}
.srch-bar{
  width: 100%;
  height: auto;
  margin: auto;
  min-width: 850px;
}
.srch-bar .form-control{
  width: 100%;
  height: auto;
  box-shadow: none;
  outline: 0 none;
  border: 1px solid #d6daea;
  border-right: 0px solid #d6daea;
  font-size: 13px;
  font-weight: 400;
  border-radius: 3px 0px 0px 3px;
  height: 40px;
  color: #001737;
  padding: 10px;
  padding-left: 20px;
  line-height: 40px;
  box-sizing: border-box;
}
.srch-btn{
  width: 100%;
  height: auto;
  margin: auto;
}
.srch-btn .btn{
  width: 150px;
  height: 40px;
  border-radius: 0px 3px 3px 0px;
  box-shadow: none;
  outline: 0 none;
  border: 1px solid #d6daea;
  border-left: 0px solid #d6daea;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
  background: rgba(14, 51, 78, 0.7);
  color: #fff;
  padding: 0px;
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;
}
.preview-mn-div{
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 50px;
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
          <div class="srch-item">
            <div class="srch-bar">
              <div class="form-group">
                <input type="text" id="serachimages" class="form-control" placeholder="Enter Roll Number">
              </div>
            </div>
          </div>
          <div class="srch-item">
            <div class="srch-btn">
              <button type="button" onclick="searchinRepo();" class="btn btn-dark">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div class="preview-mn-div">
        <div class="preview-innr-div">
          <div class="image-box">
            <img id="imgsrc" src="img/noimage.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
  function searchinRepo(){
    var imgname = $("#serachimages").val().trim();
    if(imgname == ""){
      alert("please enter roll number");
      $("#serachimages").focus();
      return;
    }

    var testImg = new Image();
    testImg.onload = function() {
      $("#imgsrc").attr('src', 'img/' + imgname + '.jpg');
    };
    testImg.onerror = function() {
      var testImg2 = new Image();
      testImg2.onload = function() {
        $("#imgsrc").attr('src', 'img/' + imgname + '.png');
      };
      testImg2.onerror = function() {
        $("#imgsrc").attr('src', 'img/noimage.jpg');
      };
      testImg2.src = 'img/' + imgname + '.png';
    };
    testImg.src = 'img/' + imgname + '.jpg';
  }

  document.getElementById("serachimages").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      searchinRepo();
    }
  });
  </script>
</body></html>
