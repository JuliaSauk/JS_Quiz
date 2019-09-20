let score = 0;

/*Question1************************************************************************/
function Question_1() {
  let modal = document.getElementById('modal1');
  let span = document.getElementsByClassName('close1')[0];

  let okBtn = document.getElementById('true1');
  let falseBtn = document.getElementById('false1');
  let cancelBtn = document.getElementById('cancel1');

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }

    okBtn.onclick = function () {
      document.getElementById('status1').innerHTML = '<h2 class="answer correct">Correct</h2>';
      modal.style.display = 'none';
      document.getElementById('btn1').disabled = true;
      score = parseInt(++score);
      document.getElementById('counter').innerHTML = score;
    };

    falseBtn.onclick = function () {
      document.getElementById('status1').innerHTML = '<h2 class="answer incorrect">Incorrect</h2>';
      modal.style.display = 'none';
      document.getElementById('btn1').disabled = true;
    };

    cancelBtn.onclick = function () {
      modal.style.display = 'none';
    };
  };
}

/*Question2************************************************************************/
function Question_2() {
  let modal = document.getElementById('modal2');
  let span = document.getElementsByClassName('close2')[0];

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }

    let okBtn = document.getElementById('ok2');
    let cancelBtn = document.getElementById('cancel2');

    okBtn.onclick = function () {

      let answer2 = document.getElementById('answer2').value;
      let correctAnswer = 9000;

      if (answer2.trim() === '') {
        document.getElementById('errors2').innerHTML = 'You didn`t answer the question.';
      } else if (isNaN(answer2)) {
        document.getElementById('errors2').innerHTML = 'Please enter the number.';
      } else {
        answer2 = parseInt(answer2);
        if (answer2 === correctAnswer) {
          document.getElementById('status2').innerHTML = '<h2 class="answer correct">Correct</h2>';
          modal.style.display = 'none';
          document.getElementById('btn2').disabled = true;
          score = parseInt(++score);
          document.getElementById('counter').innerHTML = score;
        } else {
          document.getElementById('status2').innerHTML = '<h2 class="answer incorrect">Incorrect</h2>';
          modal.style.display = 'none';
          document.getElementById('btn2').disabled = true;
        }
      }
    };

    cancelBtn.onclick = function () {
      modal.style.display = 'none';
    };
  };
}

/*Question3************************************************************************/
function Question_3() {
  let modal = document.getElementById('modal3');
  let span = document.getElementsByClassName('close3')[0];

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }

    let okBtn = document.getElementById('ok3');
    let cancelBtn = document.getElementById('cancel3');

    okBtn.onclick = function () {

      let answer3 = document.getElementById('answer3').value;
      let correctAnswer = 'Chernihiv';

      if (answer3.trim() === '') {
        document.getElementById('errors3').innerHTML = 'You didn`t answer the question.';
      } else {
        if (answer3 === correctAnswer) {
          document.getElementById('status3').innerHTML = '<h2 class="answer correct">Correct</h2>';
          modal.style.display = 'none';
          score = parseInt(++score);
          document.getElementById('counter').innerHTML = score;
          document.getElementById('btn3').disabled = true;
        } else {
          document.getElementById('status3').innerHTML = '<h2 class="answer incorrect">Incorrect</h2>';
          modal.style.display = 'none';
          document.getElementById('btn3').disabled = true;
        }
      }
    };

    cancelBtn.onclick = function () {
      modal.style.display = 'none';
    };
  };
}

/*Question4************************************************************************/
function Question_4() {
  let modal = document.getElementById('modal4');
  let span = document.getElementsByClassName('close4')[0];

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }

    let trueBtn = document.getElementById('true4');
    let falseBtn = document.getElementById('false4');
    let cancelBtn = document.getElementById('cancel4');

    falseBtn.onclick = function () {
      document.getElementById('status4').innerHTML = '<h2 class="answer correct">Correct</h2>';
      modal.style.display = 'none';
      score = parseInt(++score);
      document.getElementById('counter').innerHTML = score;
      document.getElementById('btn4').disabled = true;
    };

    trueBtn.onclick = function () {
      document.getElementById('status4').innerHTML = '<h2 class="answer incorrect">Incorrect</h2>';
      modal.style.display = 'none';
      document.getElementById('btn4').disabled = true;
    };

    cancelBtn.onclick = function () {
      modal.style.display = 'none';
    };
  };
}

/*Question5************************************************************************/
function Question_5() {
  let modal = document.getElementById('modal5');
  let span = document.getElementsByClassName('close5')[0];

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }

    let okBtn = document.getElementById('ok5');
    let cancelBtn = document.getElementById('cancel5');

    okBtn.onclick = function () {

      let answer2 = document.getElementById('answer5').value;
      let correctAnswer = 305;

      if (answer2.trim() === '') {
        document.getElementById('errors5').innerHTML = 'You didn`t answer the question.';
      } else if (isNaN(answer2)) {
        document.getElementById('errors5').innerHTML = 'Please enter the number.';
      } else {
        answer2 = parseInt(answer2);
        if (answer2 === correctAnswer) {
          document.getElementById('status5').innerHTML = '<h2 class="answer correct">Correct</h2>';
          modal.style.display = 'none';
          score = parseInt(++score);
          document.getElementById('counter').innerHTML = score;
          document.getElementById('btn5').disabled = true;
        } else {
          document.getElementById('status5').innerHTML = '<h2 class="answer incorrect">Incorrect</h2>';
          modal.style.display = 'none';
          document.getElementById('btn5').disabled = true;

        }
      }
    };

    cancelBtn.onclick = function () {
      modal.style.display = 'none';
    };
  };
}