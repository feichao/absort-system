
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var MM = 40;

context.save();

for (var i = 0; i < 800; i += MM) {
  for (var j = 0; j < 400; j += MM) {
    if ((i + j) / MM % 2 === 0) {
      context.fillStyle = 'rgba(230, 230, 230, 0.5)';
    } else {
      context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    }
    context.fillRect(i, j, MM, MM);
  }
}

context.restore();

var guideLines = new GuideLines();

for (var i = 0; i <= 400; i += MM) {
  guideLines.addHlines(i);
}

for (var j = 0; j <= 800; j += MM) {
  guideLines.addVlines(j);
}

var retangle = document.getElementById('retangle');
var retangle1 = document.getElementById('retangle-1');

var moveSystem = new MoveSystem();

moveSystem.setABD(10);
moveSystem.setElement(retangle);
moveSystem.setGuideLines(guideLines);

setTimeout(function() {
  moveSystem.setABD(5);
  moveSystem.setElement(retangle1);
}, 10000);