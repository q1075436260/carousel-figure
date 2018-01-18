// 可以由外部调用像是按钮  链接等等就不用写window.onload，
// window.onload是指页面加载完立即执行的意思
var aWrap = document.getElementById("wrap"),
      aImg  = document.getElementsByClassName("banner-img"),
      aSpan = document.getElementsByTagName("span"),
      abody = document.getElementsByTagName("body"),
      aPrev = document.getElementsByClassName("prev")[0],
      aNext = document.getElementsByClassName("next")[0];
  aSpan[0].classList.add("on");
  aImg[0].style.opacity = "1";
// 轮播
  var num = 0;
  for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].index = i;
    aSpan[i].onclick = function () {
      num = this.index;
      for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].classList.remove("on");
        aImg[i].style.opacity = "0";
      }
      aSpan[num].classList.add("on");
      aImg[num].style.opacity = "1";
    }
    aNext.onclick = function() {
      for (var j = 0; j < aSpan.length; j++) {
        if (aSpan[j].className == "on") {
          aSpan[j].classList.remove("on");
          aImg[j].style.opacity = "0";
          j++;
          if (j > 4) {
            j = 0;
          }
          aSpan[j].classList.add("on");
          aImg[j].style.opacity = "1";
        }
      }
    }
    aPrev.onclick = function() {
      for (var j = 0; j < aSpan.length; j++) {
        if (aSpan[j].className == "on") {
          aSpan[j].classList.remove("on");
          aImg[j].style.opacity = "0";
          j--;
          if (j < 0) {
            j = 4;
          }
          aSpan[j].classList.add("on");
          aImg[j].style.opacity = "1";
        }
      }
    }
  }
  function round() {
    num++;
    if (num < 5) {
      for (var j = 0; j < aSpan.length; j++) {
        aSpan[j].classList.remove("on");
        aImg[j].style.opacity = "0";
      }
      aSpan[num].classList.add("on");
      aImg[num].style.opacity = "1";
    }else {
      num = -1;
    }
  }
  clearInterval(timer);
  var timer = setInterval("round()",2000);
  aWrap.onmouseover = function(){/*鼠标引入，清除定时器，轮播图停止*/
      clearInterval(timer);
  };
  aWrap.onmouseout = function(){/*鼠标移出，重新调用定时器，轮播图开始*/
      clearInterval(timer);
       timer = setInterval("round()",2000);
     }
