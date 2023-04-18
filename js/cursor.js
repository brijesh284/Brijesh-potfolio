var ball = document.getElementById("ball");

document.onmousemove = function (e) {
  var x = e.clientX;
  var y = e.clientY;

  // Add a delay of 100 milliseconds
  setTimeout(function () {
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  }, 100);
};
