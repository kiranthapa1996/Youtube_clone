const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Mark Twain",
        d: "Jane Austen",
        correct: "b"
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Mercury",
        d: "Venus",
        correct: "c"
    },
    {
        question: "Who is the first prime minister of India?",
        a: "Jawaharlal Nehru",
        b: "Rajiv Gandhi",
        c: "Narendra Damodardas Modi",
        d: "Indira Gandhi",
        correct: "a"
    },
    {
        question: "which is the smallest country in the world by area?",
        a: "India",
        b: "Nepal",
        c: "Vatican City",
        d: "Bhutan",
        correct: "c"
    },
    {
        question: "How many continents are there in the world",
        a: "8",
        b: "7",
        c: "5",
        d: "10",
        correct: "b"
    },
    {
        question: "What is the National Animal of India",
        a: "Lion",
        b: "Monkey",
        c: "Elephant",
        d: "Tiger",
        correct: "d"
    },
    {
        question: "What is the smallest state of India?",
        a: "Goa",
        b: "sikkim",
        c: "Punjab",
        d: "Haryana",
        correct: "a"
    },
    {
        question: "How many states are there in India",
        a: "30",
        b: "29",
        c: "28",
        d: "26",
        correct: "c"
    },
    {
        question: "How many Union Territories are there in India",
        a: "4",
        b: "8",
        c: "10",
        d: "12",
        correct: "b"
    },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');

function loadQuiz() {
    // Clear previous question
    quizContainer.innerHTML = '';

    const questionEl = document.createElement('h2');
    questionEl.className = "text-xl mb-4";
    questionEl.innerText = quizData[currentQuestion].question;

    const optionsContainer = document.createElement('div');

    for (const option in quizData[currentQuestion]) {
        if (option !== 'question' && option !== 'correct') {
            const optionLabel = document.createElement('label');
            optionLabel.className = "block mb-2";

            const optionRadio = document.createElement('input');
            optionRadio.type = 'radio';
            optionRadio.name = 'answer';
            optionRadio.value = option;
            optionRadio.className = "mr-2";

            optionLabel.appendChild(optionRadio);
            optionLabel.innerHTML += quizData[currentQuestion][option];

            optionsContainer.appendChild(optionLabel);
        }
    }

    quizContainer.appendChild(questionEl);
    quizContainer.appendChild(optionsContainer);
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    return selectedAnswer;
}

nextBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2 class="text-xl font-bold">You answered correctly ${score}/${quizData.length} questions.</h2>`;
            nextBtn.innerText = 'Restart';
            nextBtn.addEventListener('click', () => {
                location.reload();
            });
        }
    }
});

// Load the first question when the page loads
loadQuiz();
