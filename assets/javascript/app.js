//Setting Object Array of Questions 
var questions = [
    {
    question: "Mama always said, 'Life is like?'", 
    choiceA: "Making lemonade out of lemons",
    choiceB: "A box of chocolates, you never know what you're going get.",
    choiceC: "Riding a bicycle",
    choiceD: "A beautiful melody, only the lyrics are messed up",
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
    question: "What year was it in the opening scene of the movie?",
    choiceA: "1991",
    choiceB: "1971",
    choiceC: "1981",
    choiceD: "1961",
    answer: "D"
    },
    {
    question: "How long did it rain in Vietnam?",
    choiceA: "4 hours",
    choiceB: "4 days",
    choiceC: "4 months",
    choiceD: "4 years",
    answer: "C"
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
    question: "What famous musician was on the TV talk show with Forrest?",
    choiceA: "Ringo Starr",
    choiceB: "John Lennon",
    choiceC: "George Harrison",
    choiceD: "Paul McCartney",
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


// FUNCTIONS (These are bits of code that we will call upon to run when needed).
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
}

///Function to check answers
function checkAnswer(guess){
 if (questions[runningQuestionRef].answer == guess) {
     alert('Correct!');
     correctResponse++;
 } else  {
     alert("Wrong!");
     incorrectResponses++;
 } if (runningQuestionRef < lastQuestionRef) {
     runningQuestionRef++;
     renderQuestions();
 } else if (runningQuestionRef = lastQuestionRef) {
     $("#question").html("<h3>Game-Over</h3>");
     $("#a").html("<h4>Correct Answers: " + correctResponse + "</h4>");
     $("#b").html("<h4>Incorrect Answers: " + incorrectResponses + "</h4>");
     $("#c").replaceWith(" ");
     $("#d").replaceWith(" ");
}
}
///******************************************Main Game*************************************************** */
$(document).ready(function() {
    $("#start-button").on("click", startGame)
});