/* jshint esversion: 6 */

// list of questions 
/* Handling of the questions was inspired by a YouTube tutorial - details in credits */
let questions = [
    {
        question : "The artist was known for his love of cats and unconventional fashion choices. Who painted this portrait?",
        art : "assets/images/gklimt.png",
        answerA : "Gustav Klimt",
        answerB : "Edouardo Manet",
        answerC : "Pablo Picasso",
        correct : "A",
        right : "Gustav Klimt painted this portrait of 9 year old Mäda Primavesi in 1912.",
        wrong : "This portrait was painted by Gustav Klimt, a prominent member of the Vienna Secession movement."
    },
    {
        question : "The artist who painted this portrait has famously offered to repaint Michelangelo's Sistine Chapel. What was his name?",
        art : "assets/images/elgreco.png",
        answerA : "Claude Monet",
        answerB : "El Greco",
        answerC : "Henri Rousseau",
        correct : "B",
        right : "Dominikos Theotokopoulos widely known as El Greco painted 'A Boy Blowing on an Ember to Light a Candle'.",
        wrong : "Correct answer is El Greco. You might want to brush up on your Spanish Renaissance knowledge."
    },
    {
        question : "This portrait is a work of the official Court Painter of King Henry the VIII. His name was...?",
        art : "assets/images/hholbein.png",
        answerA : "Amedeo Modigliani",
        answerB : "Georges Seurat",
        answerC : "Hans Holbein",
        correct : "C",
        right : "'Portrait of a Lady with a Squirrel and a Starling' is one of many that gained Hans Holbein the Younger reputation of the greatest portraitists of the 16th century.",
        wrong : "This portrait was painted by Hans Holbein the Younger. It is a great example of Northern Renaissance style."
    }  
];

// elements selection
let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let art = document.getElementById("art");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let totalscore = document.getElementById("totalscore");
let goodbye = document.getElementById("goodbye");

// question variables
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;


// display questions
function displayQuestion(){
    
    let i = questions[runningQuestion];

    question.innerHTML = "<p>"+ i.question +"</p>";
    art.innerHTML = "<img src="+ i.art +">";
    answerA.innerHTML = i.answerA;
    answerB.innerHTML = i.answerB;
    answerC.innerHTML = i.answerC;   
}

// start quiz
start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
    checkAnswer;
}

// restart quiz
document.getElementById("again-btn").onclick = function() {reStartQuiz();};

function reStartQuiz(){
    start.style.display = "block";
    displayQuestion();
    quiz.style.display = "none";
    score = 0;
    runningQuestion = 0;
    closeModal();
}

// score modal opening
function openModal() {
    let scorePerCent = Math.round(100 * score/questions.length);
    document.getElementById("modalscore").style.display = "block";
    document.getElementById("modalscore").className += "show";
    totalscore.innerHTML = "<p>"+ `You got ${ scorePerCent }% right!` +"</p>";
}

// score modal closing
function closeModal() {
    document.getElementById("modalscore").style.display = "none";
}

// check answers and display personalized comments   
function checkAnswer(answer){
    let d = questions[runningQuestion];
    let right = d.right;
    let wrong = d.wrong;
    if( answer == questions[runningQuestion].correct){
        score++;    
        alert(`You are right! ${ right } `);
    }else {
        alert(`You are wrong! ${ wrong } `);
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        displayQuestion();
    }else{
        // display score 
        openModal();
    }
}

// display end message 
document.getElementById("quit-btn").onclick = function() {goodBye();};
function goodBye(){
    quiz.style.display = "none";
    closeModal();
    goodbye.style.display = "block";
}



