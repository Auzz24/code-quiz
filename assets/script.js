var buttonEl = document.querySelector("#start-quiz");
var h2El = document.querySelector("heading");
var timer; 

var testQuestion1 = function (){
//create the element 
var h2El = document.createElement("h2");
var questionEl = document.createElement("p");
var answersListEl = document.createElement("ul");
var correctAnswerEL = document.createElement("button");
var wrongAnswer1El = document.createElement ("button");
var wrongAnswer2El = document.createElement ("button");
var wrongAnswer3El = document.createElement ("button");


//add text for heading, question, answers
h2El.textContent = "QUESTION 1";
questionEl.textContent = "How do you acess the console log in your browser?";
answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
correctAnswerEL.textContent = "Right click the browser then click inspect";
wrongAnswer1El.textContent = "Yell at the screen";
wrongAnswer2El.textContent = "Pray";
wrongAnswer3El.textContent = "All of the Above";

correctAnswerEL.addEventListener("click", testQuestion2);
wrongAnswer1El.addEventListener("click", subtractTime);
wrongAnswer2El.addEventListener("click", subtractTime);
wrongAnswer3El.addEventListener("click", subtractTime);

var container = document.querySelector (".questions")
    container.appendChild (h2El);
    container.appendChild (questionEl);
    container.appendChild (answersListEl);
    answersListEl.appendChild (correctAnswerEL);
    answersListEl.appendChild (wrongAnswer3El);
    answersListEl.appendChild (wrongAnswer2El);
    answersListEl.appendChild (wrongAnswer1El);

var WelcomeMessage = document.querySelector (".be-gone")
    WelcomeMessage.style.display = "none";
};

//countdown function 
function startTimer(duration) {
    timer = duration
    var seconds;
    setInterval(function () {
        seconds = timer
        var display = document.querySelector('#time');
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

buttonEl.onclick = function () {
    var sixtySeconds = 59
        
    startTimer(sixtySeconds);

testQuestion1();
};

function nextQuestion () {
    alert("next question")
}

function subtractTime (){
    timer -= 10
    testQuestion2 ();
}

var testQuestion2 = function (){
    //create the element 
    var h2El = document.createElement("h2");
    var questionEl = document.createElement("p");
    var answersListEl = document.createElement("ul");
    var correctAnswerEL = document.createElement("button");
    var wrongAnswer1El = document.createElement ("button");
    var wrongAnswer2El = document.createElement ("button");
    var wrongAnswer3El = document.createElement ("button");
    
    
    //add text for heading, question, answers
    h2El.textContent = "QUESTION 2";
    questionEl.textContent = "Whats up?";
    answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
    correctAnswerEL.textContent = "nothing much you?";
    wrongAnswer1El.textContent = "no";
    wrongAnswer2El.textContent = "yes";
    wrongAnswer3El.textContent = "bye";
    
    correctAnswerEL.addEventListener("click", nextQuestion);
    wrongAnswer1El.addEventListener("click", subtractTime);
    wrongAnswer2El.addEventListener("click", subtractTime);
    wrongAnswer3El.addEventListener("click", subtractTime);
    
    var container = document.querySelector (".questions")
        container.innerHTML = "";
        container.appendChild (h2El);
        container.appendChild (questionEl);
        container.appendChild (answersListEl);
        answersListEl.appendChild (correctAnswerEL);
        answersListEl.appendChild (wrongAnswer3El);
        answersListEl.appendChild (wrongAnswer2El);
        answersListEl.appendChild (wrongAnswer1El);
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