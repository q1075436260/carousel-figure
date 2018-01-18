window.onload = function() {
  var aWrap = document.getElementById("wrap"),
      aImg  = document.getElementsByClassName("banner-img"),
      aSpan = document.getElementsByClassName("tab")[0].getElementsByTagName("span"),
      aPrev = document.getElementsByClassName("prev")[0],
      aNext = document.getElementsByClassName("next")[0];
  var num = 0;
  aImg[0].style.opacity = "1";
  aSpan[0].classList.add("on");
  for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].index = i;
    aSpan[i].onclick = function() {
      num = this.index;
     for (var j = 0; j < aSpan.length; j++) {
       aImg[j].style.opacity = "0";
       aSpan[j].classList.remove("on");
     }
     aImg[num].style.opacity = "1";
     aSpan[num].classList.add("on");
    }
  }
  aPrev.onclick = function() {
  for (var j = 0; j < aSpan.length; j++) {
    if (aSpan[j].className == "on") {
      aImg[j].style.opacity = "0";
      aSpan[j].classList.remove("on");
      j--;
      if (j < 0) {
        j = 4;
      }
      aImg[j].style.opacity = "1";
      aSpan[j].classList.add("on");
    }
  }
  }
  aNext.onclick = function() {
  for (var j = 0; j < aSpan.length; j++) {
    if (aSpan[j].className == "on") {
      aImg[j].style.opacity = "0";
      aSpan[j].classList.remove("on");
      j++;
      if (j > 4) {
        j = 0;
      }
      aImg[j].style.opacity = "1";
      aSpan[j].classList.add("on");
    }
  }
  }
  function round() {
    num++;
    if (num < 5) {
      for (var j = 0; j < aSpan.length; j++) {
        aImg[j].style.opacity = "0";
        aSpan[j].classList.remove("on");
      }
      aImg[num].style.opacity = "1";
      aSpan[num].classList.add("on");
    }else {
      num = -1;
    }
  }
  clearInterval(timer);
  var timer = setInterval(round,2000);
  aWrap.onmouseover = function() {
    clearInterval(timer);
  }
  aWrap.onmouseout = function() {
    clearInterval(timer);
  timer = setInterval(round,2000);
  }
}
