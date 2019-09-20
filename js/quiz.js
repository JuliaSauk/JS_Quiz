var score = 0;

function openModal(modalId, closeId, okId, cancelId){
   
}

/*Question1************************************************************************/ 
function Question_1(){
    var modal = document.getElementById("modal1");
    var span = document.getElementsByClassName("close1")[0];
   
    var okBtn = document.getElementById('true1');
    var falseBtn = document.getElementById('false1');
    var cancelBtn = document.getElementById('cancel1');

    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        okBtn.onclick = function(){
            document.getElementById('status1').innerHTML ='<h2 style="color: rgb(194,52,64);margin: 0;">Correct</h2>';
            modal.style.display = "none";
            document.getElementById("btn1").disabled = true;
            score = parseInt(score); //??
            document.getElementById('counter').innerHTML += score + 1;
        }

        falseBtn.onclick = function(){
            document.getElementById('status1').innerHTML ='<h2 style="color: rgb(53, 15, 19); margin: 0;">Incorrect</h2>';
            modal.style.display = "none";
            document.getElementById("btn1").disabled = true;
        }

        cancelBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
}

/*Question2************************************************************************/ 
function Question_2 () {
    var modal = document.getElementById("modal2");
    var span = document.getElementsByClassName("close2")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
            
        var okBtn = document.getElementById('ok2');
        var cancelBtn = document.getElementById('cancel2');

        okBtn.onclick = function(){
            
            var answer2 = document.getElementById('answer2').value;
            var correctAnswer = 9000;

            if (answer2.trim() === ''){
                document.getElementById('errors2').innerHTML = 'You didn`t answer the question.';
            } else if (isNaN(answer2)){
                document.getElementById('errors2').innerHTML = 'Please enter the number.'
            } else {
                answer2 = parseInt(answer2);
                if(answer2 === correctAnswer){
                    document.getElementById('status2').innerHTML ='<h2 style="color: rgb(194,52,64);margin: 0;">Correct</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn2").disabled = true;
                    score = parseInt(score); // ?
                    document.getElementById('counter').innerHTML += score + 1;
                } else {
                    document.getElementById('status2').innerHTML ='<h2 style="color: rgb(53, 15, 19); margin: 0;">Incorrect</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn2").disabled = true;
                }
            }
        }

        cancelBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
}

/*Question3************************************************************************/ 
function Question_3 () {
    var modal = document.getElementById("modal3");
    var span = document.getElementsByClassName("close3")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
            
        var okBtn = document.getElementById('ok3');
        var cancelBtn = document.getElementById('cancel3');
        
        okBtn.onclick = function(){
            
            var answer3 = document.getElementById('answer3').value;
            var correctAnswer = 'Chernihiv';

            if (answer3.trim() === ''){
                document.getElementById('errors3').innerHTML = 'You didn`t answer the question.';
            } else {
                
                if(answer3 === correctAnswer){
                    document.getElementById('status3').innerHTML ='<h2 style="color: rgb(194,52,64);margin: 0;">Correct</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn3").disabled = true;
                } else {
                    document.getElementById('status3').innerHTML ='<h2 style="color: rgb(53, 15, 19); margin: 0;">Incorrect</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn3").disabled = true;
                }
            }
        }

        cancelBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
}

/*Question4************************************************************************/ 
function Question_4(){
    var modal = document.getElementById("modal4");
    var span = document.getElementsByClassName("close4")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
            
        var trueBtn = document.getElementById('true4');
        var falseBtn = document.getElementById('false4');
        var cancelBtn = document.getElementById('cancel4');

        falseBtn.onclick = function(){
            document.getElementById('status4').innerHTML ='<h2 style="color: rgb(194,52,64);margin: 0;">Correct</h2>';
            modal.style.display = "none";
            document.getElementById("btn4").disabled = true;
        }

        trueBtn.onclick = function(){
            document.getElementById('status4').innerHTML ='<h2 style="color: rgb(53, 15, 19); margin: 0;">Incorrect</h2>';
            modal.style.display = "none";
            document.getElementById("btn4").disabled = true;
        }

        cancelBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
}

/*Question5************************************************************************/ 
function Question_5 () {
    var modal = document.getElementById("modal5");
    var span = document.getElementsByClassName("close5")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
            
        var okBtn = document.getElementById('ok5');
        var cancelBtn = document.getElementById('cancel5');

        okBtn.onclick = function(){
            
            var answer2 = document.getElementById('answer5').value;
            var correctAnswer = 305;

            if (answer2.trim() === ''){
                document.getElementById('errors5').innerHTML = 'You didn`t answer the question.';
            } else if (isNaN(answer2)){
                document.getElementById('errors5').innerHTML = 'Please enter the number.'
            } else {
                answer2 = parseInt(answer2);
                if(answer2 === correctAnswer){
                    document.getElementById('status5').innerHTML ='<h2 style="color: rgb(194,52,64);margin: 0;">Correct</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn5").disabled = true;
                } else {
                    document.getElementById('status5').innerHTML ='<h2 style="color: rgb(53, 15, 19); margin: 0;">Incorrect</h2>';
                    modal.style.display = "none";
                    document.getElementById("btn5").disabled = true;
                    
                }
            }
        }

        cancelBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
}