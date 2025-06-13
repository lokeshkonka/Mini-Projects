document.addEventListener('DOMContentLoaded',()=>{
    const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
//   {
//     question: "Who wrote 'Hamlet'?",
//     choices: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
//     answer: "William Shakespeare"
//   },
//   {
//     question: "Which gas do plants absorb from the atmosphere?",
//     choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
//     answer: "Carbon Dioxide"
//   },
//   {
//     question: "What is the hardest natural substance on Earth?",
//     choices: ["Gold", "Iron", "Diamond", "Platinum"],
//     answer: "Diamond"
//   },
//   {
//     question: "What is the smallest prime number?",
//     choices: ["0", "1", "2", "3"],
//     answer: "2"
//   },
//   {
//     question: "Which ocean is the largest?",
//     choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
//     answer: "Pacific"
//   },
//   {
//     question: "In which year did the Titanic sink?",
//     choices: ["1905", "1912", "1920", "1899"],
//     answer: "1912"
//   },
//   {
//     question: "What does HTML stand for?",
//     choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "HomeText Modern Language"],
//     answer: "HyperText Markup Language"
//   },
//   {
//     question: "How many continents are there?",
//     choices: ["5", "6", "7", "8"],
//     answer: "7"
//   },
//   {
//     question: "Which is the longest river in the world?",
//     choices: ["Amazon", "Ganga", "Nile", "Yangtze"],
//     answer: "Nile"
//   },
//   {
//     question: "Which planet has the most moons?",
//     choices: ["Jupiter", "Saturn", "Mars", "Earth"],
//     answer: "Saturn"
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
//     answer: "Leonardo da Vinci"
//   },
//   {
//     question: "Which language is used to style web pages?",
//     choices: ["HTML", "JQuery", "CSS", "XML"],
//     answer: "CSS"
//   },
//   {
//     question: "What is the largest mammal?",
//     choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
//     answer: "Blue Whale"
//   },
//   {
//     question: "Which country is known as the Land of the Rising Sun?",
//     choices: ["China", "Thailand", "Japan", "South Korea"],
//     answer: "Japan"
//   },
//   {
//     question: "What is the boiling point of water in Celsius?",
//     choices: ["90°C", "100°C", "110°C", "120°C"],
//     answer: "100°C"
//   },
//   {
//     question: "How many bones are in the adult human body?",
//     choices: ["206", "201", "210", "196"],
//     answer: "206"
//   },
//   {
//     question: "Which instrument has keys, pedals, and strings?",
//     choices: ["Guitar", "Piano", "Violin", "Drum"],
//     answer: "Piano"
//   },
//   {
//     question: "Which vitamin is produced when a person is exposed to sunlight?",
//     choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
//     answer: "Vitamin D"
//   }
];
const startbtn = document.getElementById('start-btn')
const restartbtn = document.getElementById('restart-btn')
const quizcontainer = document.getElementById('quiz-container');
const Questiontext = document.getElementById('Question-text');
const choiceslist = document.getElementById('choices-list')
const Resultcontainer = document.getElementById('result-container');
const scoredisplay = document.getElementById('score')
const nextbtn = document.getElementById('next-btn')
let currentQuizIndex = 0;
let score =0;
startbtn.addEventListener('click',startquiz)
nextbtn.addEventListener('click',()=>{
    currentQuizIndex++;
    if (currentQuizIndex < questions.length) {
        showquestion()
    }else{
        showresult()
    }
})
restartbtn.addEventListener('click',()=>{
    currentQuizIndex = 0;
    score =0;
    Resultcontainer.classList.add('hidden');
    startquiz();
})
function startquiz(){
    startbtn.classList.add('hidden');
    Resultcontainer.classList.add('hidden')
    quizcontainer.classList.remove('hidden');
    showquestion()
}
function showquestion(){
    nextbtn.classList.add('hidden');
    Questiontext.textContent = questions[currentQuizIndex].question
    choiceslist.innerHTML = '' // to refresh
    questions[currentQuizIndex].choices.forEach((list)=>{
        const li= document.createElement('li')
        li.textContent = list
        li.addEventListener('click',()=>{
            li.style.backgroundColor =  'rgba(255, 255, 0, 0.3)';
            selectans(list)
        })
        choiceslist.appendChild(li)
    })
}

function selectans(choice){
    const correctans = questions[currentQuizIndex].answer

    if(correctans == choice){
        score++;
    }
    nextbtn.classList.remove('hidden');
}

function showresult(){
    quizcontainer.classList.add('hidden');
    Resultcontainer.classList.remove('hidden');
    scoredisplay.textContent = `${score} / ${questions.length}`
}
})