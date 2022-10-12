//establishing timer
var timeEl = document.querySelector(".time");
var testMeBtn = document.querySelector("#test-me");
var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var ans1Btn = document.querySelector("#ans1");
var opener = document.querySelector(".opener");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var secondsLeft = 20;
var i = 0;


//timer function    
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left " + "   ";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();   
    }   

  }, 1000);
}
// if user clicks the wrong answer deduct 5 secs from time

// if user does not answer all questions in 60 seconds,msg displays
function sendMessage() {
    timeEl.textContent = (" You're out of time! ");  
  }
  




// starting the quiz


//display first question
function displayQuestion (){
  if (i === questionsArr.length){
    //end quiz in form of function
  }
  //create another section to end quiz, replace show with hide with input and button
  quiz.classList.replace("hide","show");
  question.textContent = questionsArr[i].question
  btn1.textContent = questionsArr[i].opt1
  btn2.textContent = questionsArr[i].opt2
  btn3.textContent = questionsArr[i].opt3
  btn4.textContent = questionsArr[i].opt4
}
function checkAnswer (answer){
  if (answer === questionsArr[i].correct){
    i++;
    displayQuestion()
    }
    else {
      i++;
      secondsLeft = secondsLeft -5
      displayQuestion()
    }
}
//testMeBtn is supposed to start time & display first question
  testMeBtn.addEventListener("click", ()=>{
       startTimer();
       opener.classList.add("hide");
       displayQuestion()
       console.log("click");
  })
  ans1Btn.addEventListener("click", ()=>{
    var ansClicked = this.event.target.textContent
    checkAnswer(ansClicked);
    console.log(ansClicked);
  })
// when answer is clicked, display next question 

//tally right and wrong answers and give score



