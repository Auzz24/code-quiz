var buttonEl = document.querySelector("#start-quiz");

//when start button clicked start the time and the quiz
//buttonEl.addEventListener("click", startTimer, testQuestion1);

function testQuestion1 (){
//define varaibles Questions 1-5 , answers 1-4 * 5 questions,timer, highscore    
var h2El = document.createElement("h2");
var questionEl = document.createElement("p");
var answersListEl = document.createElement("ul");
var correctAnswerEL = document.createElement("li");
var wrongAnswer1El = document.createElement ("li")
var wrongAnswer2El = document.createElement ("li")
var wrongAnswer3El = document.createElement ("li")


//add text for heading, question, answers
h2El.textContent = "QUESTION 1";
questionEl.textContent = "How do you acess the console log in your browser?";
answersListEl.textContent = (correctAnswerEL.textConten, wrongAnswer1El.textContent, wrongAnswer2El.textContentt, wrongAnswer3El.textContent);
correctAnswerEL.textContent = "Right click the Browser";
wrongAnswer1El.textContent = "Yell at the screen";
wrongAnswer2El.textContent = "Pray";
wrongAnswer3El.textContent = "All of the Above";

};

//countdown function 
function startTimer(duration, display) {
    var timer = duration,seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "6" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

buttonEl.onclick = function () {
    var sixtySeconds = 60, 
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
};

//if liCorrect is clicked then go to questions 2 
//if else take 10 seconds off and still go to next question 

//call back event listener 
//function eventHandler(event) {
    //if (event.type == 'fullscreenchange') {
      /* handle a full screen toggle */
    //} else /* fullscreenerror */ {
      /* handle a full screen toggle error */
    //}
  //}