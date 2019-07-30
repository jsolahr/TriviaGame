//Setting Object Array of Questions 
var questions = [
    {
    question: "Mama always said, 'Life is like?'", 
    choiceA: "A. Making lemonade out of lemons",
    choiceB: "B. A box of chocolates, you never know what you're going get.",
    choiceC: "C. Riding a bicycle",
    choiceD: "D. A beautiful melody, only the lyrics are messed up",
    answer: "B"
    },
    {
    question: "What city and state is Forrest from?",
    choiceA: "Greenbow, Alabama",
    choiceB: "Little Rock, Arkansas",
    choiceC: "Phoenix, Arizona",
    choiceD: "Detroit, Michigan",
    answer: "A"
    },
    {
    question: "Where was Forrest shot during the Vietnam War?",
    choiceA: "In the Arm",
    choiceB: "In the Butt",
    choiceC: "In the Leg",
    choiceD: "In the Hand",
    answer: "B"
    },
    {
    question: "What's the name of Forrest's shrimp company?",
    choiceA: "Gump Bubba Shrimp Co",
    choiceB: "Bubba Gump Shrimp Co",
    choiceC: "Bubba's Shrimp",
    choiceD: "Bubba's Best Shrimp",
    answer: "B"
   },
   {
    question: "What does Forrest name all his shrimp boats?",
    choiceA: "Jenny",
    choiceB: "Mama",
    choiceC: "Dan",
    choiceD: "Bubba",
    answer: "A"
   },
   {
    question: "What can Forrest run like?",
    choiceA: "Like the wind blows",
    choiceB: "a gazelle",
    choiceC: "Roadrunner",
    choiceD: "Usain Bolt",
    answer: "A"
   },
   {
    question: "What famous musician was on a TV talk show with Forrest?",
    choiceA: "Ringo Starr",
    choiceB: "John Lennon",
    choiceC: "George Harrison",
    choiceD: "Paul McCartney",
    answer: "B"
   },
   {
    question: "What foods did Forrest use to describe him and Jenny?",
    choiceA: "spaghetti and meatballs",
    choiceB: "peas and carrots",
    choiceC: "chicken and noodles",
    choiceD: "bread and butter",
    answer: "B"
   },
   {
    question: "What country did Forrest play ping poing in?",
    choiceA: "U.S.S.R.",
    choiceB: "Cuba",
    choiceC: "China",
    choiceD: "Vietnam",
    answer: "C"
   },
   {
    question: "What did they give Forrest to eat in the hospital?",
    choiceA: "Popsicles",
    choiceB: "Yogurt",
    choiceC: "Jello",
    choiceD: "Ice Cream",
    answer: "D"
   },
]

// Variables that I'll use later to go through my object of questions 
var lastQuestionRef = questions.length-1; 
var runningQuestionRef = 0;
//Variables to keep score
var correctResponse = 0;
var incorrectResponses = 0;
//variables to keep time
let count = 10; 
var questionsTime = 10;
var settingTime;

// FUNCTIONS (These are bits  of code that we will call upon to run when needed).
// ==================================================================================================//
//Function to create new questions and print to console 
function renderQuestions () {
    var q = questions[runningQuestionRef];

    $("#question").html("<p>" + q.question + "<p/>");
    $("#a").html(q.choiceA);
    $("#b").html(q.choiceB);
    $("#c").html(q.choiceC);
    $("#d").html(q.choiceD);
}
//Function to Start Game and render questions
function startGame (){
    $("#start-button").replaceWith(" ");
    renderQuestions();
    settingTime = setInterval(timerStart, 1000);
    timerStart();
}

///Function to check answers
function checkAnswer(guess){
    if (questions[runningQuestionRef].answer == guess) {
        alert('Correct!');
        correctResponse++;
        count = 10;
    } else  {
        alert("Wrong!");
        incorrectResponses++;
        count = 10;
    } if (runningQuestionRef < lastQuestionRef) {
        runningQuestionRef++;
        renderQuestions();
    } else if (runningQuestionRef = lastQuestionRef) {
        $("#question").replaceWith("<h3>Game Over</h3>");
        $("#a").replaceWith("<h4>Correct Answers: " + correctResponse + "</h4>");
        $("#b").replaceWith("<h4>Incorrect Answers: " + incorrectResponses + "</h4>");
        $("#c").replaceWith(" ");
        $("#d").replaceWith(" ");
        $("#clock").replaceWith(" ");
        clearInterval(settingTime);
    }
}
//Function to set timer 
function timerStart () {
    if(count >= 0) {
        $("#clock").html("<h5>Time Remaining: " + count + "</h5>");
        count--;
    } else {
       count =10;
        if (runningQuestionRef < lastQuestionRef) {
            runningQuestionRef++;
            renderQuestions();
       } else {
            clearInterval(settingTime);
        }
    }
}
    ///******************************************Start Game*************************************************** */
$(document).ready(function() {
    $("#start-button").on("click", startGame);
});