const questionsArray = [
    {
        title: 'Who was born first?',
        try1: 'Jesus',
        try2: 'Donal J. Trump',
        try3: 'Julius Caesar', 
        try4: 'All the same',
        result: 'Jesus',
    },
    {
        title: 'What month is Christmas?',
        try1: 'January',
        try2: 'June',
        try3: 'December', 
        try4: 'November',
        result: 'December',
    },
    {
        title: 'Resoled the Equation: 55*3',
        try1: '155',
        try2: '165',
        try3: '160', 
        try4: '150',
        result: '165',
    },
    {
        title: 'Who discovered gravity?',
        try1: 'Isaac Newton',
        try2: 'Albert Einstein',
        try3: 'Nelson Mandela', 
        try4: 'Neil deGrasse Tyson',
        result: 'Isaac Newton',
    },
    {
        title: 'I have 4 legs in the morning, 2 during the day and 3 at night. Who am I?',
        try1: 'Dog',
        try2: 'Creature',
        try3: 'Human', 
        try4: 'None of the above',
        result: 'Human',
    },
    {
        title: 'How many stars are there in the universe?',
        try1: 'Universe is ever growing',
        try2: 'Impossible to count',
        try3: 'Over 100 Trillion', 
        try4: 'All of the above',
        result: 'All of the above',
    },
    {
        title: 'What is the gender of the person who invented computer programming?',
        try1: 'Male',
        try2: 'Female',
        try3: 'Both', 
        try4: '',
        result: 'Female',
    }
];

let correctAnswer = '';
let randomNumber = 0;
let counter = 0;
let timer = document.getElementById('timer');
let playerCurrentLifes = document.getElementById('player-lifes');

const myGameArea = {
    frames:0,
    timing:15,
    level: 0,
    lifes: 2,
    updateQuestion(){
        timer.innerText = `Time left: ${myGameArea.timing}`;
        playerCurrentLifes.innerHTML = `Lifes left: ${myGameArea.lifes}`;
        timerInterval = setInterval(timeCountdown,1000);
        counter +=1;
        randomNumber = Math.floor(Math.random()*questionsArray.length);
        let answer1 = document.getElementById('answer1');
        let answer2 = document.getElementById('answer2');
        let answer3 = document.getElementById('answer3');
        let answer4 = document.getElementById('answer4');
        answer1.style.backgroundColor = "#6b2fda";
        answer2.style.backgroundColor = "#6b2fda";
        answer3.style.backgroundColor = "#6b2fda"; 
        answer4.style.backgroundColor = "#6b2fda";
        let questionTitle = document.getElementById('question-display');
        let currentLevel = document.getElementById('level');
        correctAnswer = questionsArray[randomNumber].result;
        document.querySelectorAll('.answer').forEach((answerToAdd)=>{
            if (answerToAdd.style.visibility === "hidden"){
                console.log('it should add the visibility here');
                answerToAdd.style.visibility = "visible";
            }
        });
        answer1.innerText = questionsArray[randomNumber].try1;
        answer2.innerText = questionsArray[randomNumber].try2;
        answer3.innerText = questionsArray[randomNumber].try3;
        answer4.innerText = questionsArray[randomNumber].try4;
        document.querySelectorAll('.answer').forEach((answerToRemove)=>{
            if (answerToRemove.innerText === ""){
                console.log('it should remove the visibility here');
                console.log(answerToRemove);
                console.log(answerToRemove.style);
                answerToRemove.style.visibility = "hidden";
            }
        });
        questionTitle.innerText = questionsArray[randomNumber].title;
        currentLevel.innerHTML = `Level: ${counter}`;
        return correctAnswer;
    }
}



function timeCountdown(){
    myGameArea.timing -= 1;
    timer.innerHTML = `Time left: ${myGameArea.timing}`;
    if (myGameArea.timing === 0){
        alert('You have lost a life!');
        myGameArea.lifes -= 1;
        if (myGameArea.lifes === 0){
            alert('Game over');
            clearInterval(timerInterval);
            start();
        }
        playerCurrentLifes.innerHTML = `Lifes left: ${myGameArea.lifes}`
        myGameArea.timing = 15;
        timer.innerHTML = `Time left: ${myGameArea.timing}`;
    }
    
}

function repeatQuestion(){
    playerCurrentLifes.innerHTML = `Lifes left: ${myGameArea.lifes}`;
    if (myGameArea.lifes === 0){
        alert('Game over');
        start();
        clearInterval(timerInterval);
    } else if (myGameArea.lifes !== 0){
        myGameArea.timing = 15;
        timer.innerText = `Time left: ${myGameArea.timing}`;
        playerCurrentLifes.innerHTML = `Lifes left: ${myGameArea.lifes}`;
        timerInterval = setInterval(timeCountdown,1000);
        randomNumber = randomNumber;
        let answer1 = document.getElementById('answer1');
        let answer2 = document.getElementById('answer2');
        let answer3 = document.getElementById('answer3');
        let answer4 = document.getElementById('answer4');
        answer1.style.backgroundColor = "#6b2fda";
        answer2.style.backgroundColor = "#6b2fda";
        answer3.style.backgroundColor = "#6b2fda"; 
        answer4.style.backgroundColor = "#6b2fda";
        let questionTitle = document.getElementById('question-display');
        let currentLevel = document.getElementById('level');
        correctAnswer = questionsArray[randomNumber].result;
        document.querySelectorAll('.answer').forEach((answerToAdd)=>{
            if (answerToAdd.style.visibility === "hidden"){
                console.log('it should add the visibility here');
                answerToAdd.style.visibility = "visible";
            }
        });
        answer1.innerText = questionsArray[randomNumber].try1;
        answer2.innerText = questionsArray[randomNumber].try2;
        answer3.innerText = questionsArray[randomNumber].try3;
        answer4.innerText = questionsArray[randomNumber].try4;
        document.querySelectorAll('.answer').forEach((answerToRemove)=>{
            if (answerToRemove.innerText === ""){
                console.log('it should remove the visibility here');
                console.log(answerToRemove);
                console.log(answerToRemove.style);
                answerToRemove.style.visibility = "hidden";
            }
        });
        questionTitle.innerText = questionsArray[randomNumber].title;
        currentLevel.innerHTML = `Level: ${counter}`;
        return correctAnswer;
    }
}

window.addEventListener('load', ()=>{
    const answerContainer = document.getElementById('answer-container');
    answerContainer.addEventListener('click', guessAnswer)
   let startBtn = document.getElementById('start');
   startBtn.addEventListener('click', start);
})

function start(){
    let gameContainer = document.getElementById('game-container');
    let state = gameContainer.getAttribute('style');
    clearInterval(timerInterval);
    if (state === 'visibility: hidden;' && questionsArray.length !== 0){
        gameContainer.style.visibility = "visible";
        counter = 0;
        myGameArea.timing = 15;
        myGameArea.lifes = 2;
        myGameArea.updateQuestion();
    }
    if (myGameArea.lifes === 0){
        gameContainer.style.visibility = "hidden";
        document.querySelectorAll('.answer').forEach((answerToRemove)=>{
            answerToRemove.style.visibility = "hidden";
        });
    }
    if (questionsArray.length === 0){
        gameContainer.style.visibility ="hidden";
        document.querySelectorAll('.answer').forEach((answerToRemove)=>  answerToRemove.style.visibility = "hidden");
        clearInterval(timerInterval);
        counter = 0;
        myGameArea.timing = 15;
        myGameArea.lifes = 2;
    }
}
function guessAnswer(e){
    //console.log(e);
    //console.log(e.target);
    const answerValue = e.target.innerText;
    //console.log(answerValue)
    if (answerValue === correctAnswer){
        e.target.style.backgroundColor = 'green';
        questionsArray.splice(randomNumber,1);
        clearInterval(timerInterval);
        setTimeout(nextQuestion,500);
    }
    if (answerValue !== correctAnswer){
        e.target.style.backgroundColor = 'red';
        myGameArea.lifes -= 1;
        clearInterval(timerInterval);
        setTimeout(repeatQuestion,250);
    }
}

let timerInterval;

function nextQuestion(){
    if (questionsArray.length === 0){
        alert('Congratulations! You have won the game');
        document.body.innerHTML += '<p id="win-display">There is no more questions left <i class="fa-regular fa-face-surprise"></i> </p>'
        start();
        clearInterval(timerInterval);
    } if (questionsArray.length !== 0){
        myGameArea.timing = 15;
        timer.innerText = `Time left: ${myGameArea.timing}`;
        playerCurrentLifes.innerHTML = `Lifes left: ${myGameArea.lifes}`;
        timerInterval = setInterval(timeCountdown,1000);
        counter += 1;
        randomNumber = Math.floor(Math.random()*questionsArray.length);
        let answer1 = document.getElementById('answer1');
        let answer2 = document.getElementById('answer2');
        let answer3 = document.getElementById('answer3');
        let answer4 = document.getElementById('answer4');
        answer1.style.backgroundColor = "#6b2fda";
        answer2.style.backgroundColor = "#6b2fda";
        answer3.style.backgroundColor = "#6b2fda"; 
        answer4.style.backgroundColor = "#6b2fda";
        let questionTitle = document.getElementById('question-display');
        let currentLevel = document.getElementById('level');
        correctAnswer = questionsArray[randomNumber].result;
        document.querySelectorAll('.answer').forEach((answerToAdd)=>{
            if (answerToAdd.style.visibility === "hidden"){
                console.log('it should add the visibility here');
                answerToAdd.style.visibility = "visible";
            }
        });
        answer1.innerText = questionsArray[randomNumber].try1;
        answer2.innerText = questionsArray[randomNumber].try2;
        answer3.innerText = questionsArray[randomNumber].try3;
        answer4.innerText = questionsArray[randomNumber].try4;
        document.querySelectorAll('.answer').forEach((answerToRemove)=>{
            if (answerToRemove.innerText === ""){
                console.log('it should remove the visibility here');
                console.log(answerToRemove);
                console.log(answerToRemove.style);
                answerToRemove.style.visibility = "hidden";
            }});
        questionTitle.innerText = questionsArray[randomNumber].title;

        currentLevel.innerHTML = `Level: ${counter}`;
        return correctAnswer, timerInterval;
    }
}
