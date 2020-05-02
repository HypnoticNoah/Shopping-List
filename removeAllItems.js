function removeAllItems() {
  setTimeout(function () {
    location.reload();
  }, 10500);
  var time = 10;
  var dTimer = setInterval(function () {
    if (time <= 0) {
      clearInterval(dTimer);
    } {
      document.getElementById("countdown").innerHTML = " All items will be removed in " + time + " second(s)!";
    }
    time -= 1;
  }, 875);
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 111);
    myBar.style.border = '3px solid black';

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}