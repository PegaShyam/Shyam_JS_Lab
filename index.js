//Questions
const quizData = [
    {
        question: "What is the capital of India?",
        choices: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: "Delhi"
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        choices: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
        correctAnswer: "Mahatma Gandhi"
    },
    {
        question: "Which is the national animal of India?",
        choices: ["Lion", "Elephant", "Tiger", "Peacock"],
        correctAnswer: "Tiger"
    },
    {
        question: "What is the official language of India?",
        choices: ["Hindi", "English", "Bengali", "Tamil"],
        correctAnswer: "Hindi"
    }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choiceElements = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
];
const progressElement = document.getElementById('progress');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    for (let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].textContent = currentQuizData.choices[i];
    }
    updateProgress();
}

function updateProgress() {
    progressElement.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function answerSelected(choice) {
    const selectedAnswer = choice.textContent;
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quiz.innerHTML = `
        <h1>You have completed the quiz.</h1>
        <p>You scored ${score} out of ${quizData.length} (${(score / quizData.length * 100).toFixed(2)}%)</p>
    `;
}

choiceElements.forEach((choice, index) => {
    choice.addEventListener('click', () => answerSelected(choice));
});

loadQuestion();
