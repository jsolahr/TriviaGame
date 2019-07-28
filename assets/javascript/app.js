// GLOBAL VARIABLES (accessible by all functions)
var questions = {
    q1: {
        quest1: "What year did the movie Forrest Gump Debut?", 
         answers:{
            array: ["1991", "1992", "1993", "1994"],
            answerKey: "1991",
    q2: {
         quest2: "Where did Forrest Gump grow up?",
         answer: {
            array: ["Greenbough","Mobile", "Atlanta","Charlotte"],
         }
      }
    }
}
}
///Setting Object Values 

var correctAnswer = questions.q1.answers.answerKey;


// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================

//Function to replace Start Button w/Buttons
function questionStart1 () {
    $("#start-button").replaceWith("");
    $("#question").text(questions.q1.quest1);
    $("#button1").text(questions.q1.answers.array[0]);
    $("#button2").text(questions.q1.answers.array[1]);
    $("#button3").text(questions.q1.answers.array[2]);
    $("#button4").text(questions.q1.answers.array[3]);
};

//Button functions////
$("#button1").on("click", function(){
    var guess = questions.q1.answers.array[0];
    var correctAnswer = questions.q1.answers.answerKey;
if (guess === correctAnswer) {
    alert("Correct!");
    //create a new div to show a gif
} else if (guess !== correctAnswer) {
        alert("That's Wrong!");
    }
});
$("#button2").on("click", function(){
    var guess = questions.q1.answers.array[1];
    if (guess === correctAnswer) {
        alert("Yes!");
        //create a new div to show a gif
    } else if (guess !== correctAnswer) {
            alert("Oh no!");
        }
});
$("#button3").on("click", function(){
    var guess = questions.q1.answers.array[2];
    if (guess === correctAnswer) {
        alert("Yes!");
        //create a new div to show a gif
    } else if (guess !== correctAnswer) {
            alert("Oh no!");
        }

});
$("#button4").on("click", function(){
    var guess = questions.q1.answers.array[3];
    if (guess === correctAnswer) {
        alert("Yes!");
        //create a new div to show a gif
    } else if (guess !== correctAnswer) {
            alert("Oh no!");
        }
});

$(document).ready(function() {
///******************************************Main Game*************************************************** */
$("#start-button").on("click", function(){
    questionStart1 ();

});


//You need to create a new div and append it to the console.///
///you need a for loop to keep the questions ocming....

    //print the first question wit
 


});