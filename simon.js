
$(document).keypress(level);
$("h2").click(level);

$('.btn').click(function() {
  var x = this.textContent;
  value(this.textContent);
  clic.push(x);
  final(clic.length - 1);
  console.log(clic.length - 1);
});

var listno = [];

var clic = [];

// rules :-
// 1 - Press the START button. Simon will give the first signal. Repeat the signal by pressing the same color lens.
// 2 - Simon will duplicate the first signal and add one. Repeat these two signals by pressing the same color lenses, in order.
// 3 - Simon will duplicate these first two signals and add one.
// 4 - Continue playing as long as you can repeat each sequence of signals correctly.
// 5 - If you fail to repeat a sequence exactly, This means GAME OVER.



function final(l) {

  if (listno[l] === clic[l]) {
    if (clic.length === listno.length) {
      clic = [];
      console.log(clic);
      $("h2").text('LEVEL' + (listno.length + 1));
      setTimeout(function() {
        rannogen();
      }, 1000);
    }
  } else {
    $("h2").text("Gameover,press any key to restart");
    var go = new Audio('w.mp3');
    go.play();
  }
}

function rannogen() {
  var no = Math.floor((Math.random() * 4) + 1);
  listno.push("" + no);
  value(no);
}


function level(e) {
  $("h2").text('LEVEL 1');
  rannogen();
}


function value(ran) {
  if (ran == 1) {
    var y = new Audio('y.mp3');
    y.play();
    $(".yellow").addClass("opac");
    setTimeout(function() {
      $(".yellow").removeClass('opac');
    }, 400);

  } else if (ran == 2) {
    var r = new Audio('r.mp3');
    r.play();
    $(".red").addClass("opac");
    setTimeout(function() {
      $(".red").removeClass('opac');
    }, 400);
  } else if (ran == 3) {
    var b = new Audio('b.mp3');
    b.play();
    $(".blue").addClass("opac");
    setTimeout(function() {
      $(".blue").removeClass('opac');
    }, 400);
  } else if (ran == 4) {
    var g = new Audio('g.mp3');
    g.play();
    $(".green").addClass("opac");
    setTimeout(function() {
      $(".green").removeClass('opac');
    }, 400);
  }
}
