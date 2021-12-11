var buttonEl = document.querySelector("#start-quiz");
var h2El = document.querySelector("heading");
var timer; 


//QUESION 1 

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

answersListEl.style.backgroundColor = "red";
    answersListEl.style.display= "space between";

    function subtractTime (){
        timer -= 10
        testQuestion2 ();
    }
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

// function nextQuestion () {
//     testQuestion3 ();
// }



//QUESTION 2 

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
    
    correctAnswerEL.addEventListener("click", testQuestion3);
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

        function subtractTime (){
            timer -= 10
            testQuestion3 ();
        }
    };



    //QUESTION 3 

var testQuestion3 = function (){
    //create the element 
    var h2El = document.createElement("h2");
    var questionEl = document.createElement("p");
    var answersListEl = document.createElement("ul");
    var correctAnswerEL = document.createElement("button");
    var wrongAnswer1El = document.createElement ("button");
    var wrongAnswer2El = document.createElement ("button");
    var wrongAnswer3El = document.createElement ("button");
    
    
    //add text for heading, question, answers
    h2El.textContent = "QUESTION 3";
    questionEl.textContent = "What does API stand for?";
    answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
    correctAnswerEL.textContent = "Application Program Interface";
    wrongAnswer1El.textContent = "All the People Inbetween";
    wrongAnswer2El.textContent = "Austin Programs Inside";
    wrongAnswer3El.textContent = "I dont know";
    
    correctAnswerEL.addEventListener("click", testQuestion4);
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

        function subtractTime (){
            timer -= 10
            testQuestion4 ();
        }
    };



    //QUESTION 4 

    var testQuestion4 = function (){
        //create the element 
        var h2El = document.createElement("h2");
        var questionEl = document.createElement("p");
        var answersListEl = document.createElement("ul");
        var correctAnswerEL = document.createElement("button");
        var wrongAnswer1El = document.createElement ("button");
        var wrongAnswer2El = document.createElement ("button");
        var wrongAnswer3El = document.createElement ("button");
        
        
        //add text for heading, question, answers
        h2El.textContent = "QUESTION 4";
        questionEl.textContent = "What statement is true about the DOM?";
        answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
        correctAnswerEL.textContent = "Displays HTML eleement as an Object";
            wrongAnswer1El.textContent = "Dominates";
            wrongAnswer2El.textContent = "make coding harder";
            wrongAnswer3El.textContent = "All of the above";
        
        correctAnswerEL.addEventListener("click", testQuestion4);
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


        function subtractTime (){
            timer -= 10
            testQuestion5 ();
        }
        };
    


    //QUESTION 5 

    var testQuestion5 = function (){
        //create the element 
        var h2El = document.createElement("h2");
        var questionEl = document.createElement("p");
        var answersListEl = document.createElement("ul");
        var correctAnswerEL = document.createElement("button");
        var wrongAnswer1El = document.createElement ("button");
        var wrongAnswer2El = document.createElement ("button");
        var wrongAnswer3El = document.createElement ("button");
        
        
        //add text for heading, question, answers
        h2El.textContent = "QUESTION 5";
        questionEl.textContent = "The # in a css or JavaScript document refers to what?";
        answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
        correctAnswerEL.textContent = "hastag";
            wrongAnswer1El.textContent = "I.D";
            wrongAnswer2El.textContent = "Element";
            wrongAnswer3El.textContent = "number sign";
        
        correctAnswerEL.addEventListener("click", testQuestion4); //stop timer 
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


        function subtractTime (){
            timer -= 10
            testQuestion5 ();
        }
        };

//correctAnswerEL.textContent = "Application Program Interface";
    // wrongAnswer1El.textContent = "All the People Inbetween";
    // wrongAnswer2El.textContent = "Austin Programs Inside";
    // wrongAnswer3El.textContent = "I dont know";
    
            //correctAnswer3EL.textContent = "Application Program Interface";
        // wrongAnswer1El.textContent = "All the People Inbetween";
        // wrongAnswer2El.textContent = "Austin Programs Inside";
        // wrongAnswer3El.textContent = "I dont know";
        
        //correctAnswerEL.textContent = "Displays HTML eleement as an Object";
            // wrongAnswer1El.textContent = "Dominates";
            // wrongAnswer2El.textContent = "make coding harder";
            // wrongAnswer3El.textContent = "All of the above";
            // var testQuestion5 = function (){
            //     //create the element 
            //     var h2El = document.createElement("h2");
            //     var questionEl = document.createElement("p");
            //     var answersListEl = document.createElement("ul");
            //     var correctAnswerEL = document.createElement("button");
            //     var wrongAnswer1El = document.createElement ("button");
            //     var wrongAnswer2El = document.createElement ("button");
            //     var wrongAnswer3El = document.createElement ("button");
                
                
            //     //add text for heading, question, answers
            //     h2El.textContent = "QUESTION 5";
            //     questionEl.textContent = "Which statement is true about arrays?";
            //     answersListEl.textContent = (correctAnswerEL.textContent, wrongAnswer1El.textContent, wrongAnswer2El.textContent, wrongAnswer3El.textContent);
            //     correctAnswerEL.textContent = "Arrays can store multiple variable";
            //     wrongAnswer1El.textContent = "same thing as a string";
            //     wrongAnswer2El.textContent = "can store up to two values";
            //     wrongAnswer3El.textContent = "Cousin of the animal Rays";
                
            //     correctAnswerEL.addEventListener("click", nextQuestion);
            //     wrongAnswer1El.addEventListener("click", subtractTime5);
            //     wrongAnswer2El.addEventListener("click", subtractTime5);
            //     wrongAnswer3El.addEventListener("click", subtractTime5);
                
            //     var container = document.querySelector (".questions")
            //         container.innerHTML = "";
            //         container.appendChild (h2El);
            //         container.appendChild (questionEl);
            //         container.appendChild (answersListEl);
            //         answersListEl.appendChild (correctAnswerEL);
            //         answersListEl.appendChild (wrongAnswer3El);
            //         answersListEl.appendChild (wrongAnswer2El);
            //         answersListEl.appendChild (wrongAnswer1El);
            //     };
            
        