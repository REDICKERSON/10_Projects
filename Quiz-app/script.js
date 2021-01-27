const quizData = [
    {
        question: 'How old is Robert?',
        a: '10',
        b: '17',
        c: '110',
        d: '37',
        correct: 'd'
    }, {
        question: 'What is my favorite flavor?',
        a: 'Vanilla',
        b: 'Chocolate',
        c: 'Mint',
        d: 'Cinnamon',
        correct: 'd'
    }, {
        question: 'What is my height?',
        a: '5ft5',
        b: '4ft8',
        c: '6ft5',
        d: '7ft2',
        correct: 'c'
    }, {
        question: 'Who is my best friend?',
        a: 'Iryna',
        b: 'Dima',
        c: 'Michael',
        d: 'Stephen',
        correct: 'a'
    }, {
        question: 'What is favorite type of food?',
        a: 'Italian',
        b: 'Chinese',
        c: 'Mexican',
        d: 'Fastfood',
        correct: 'c'
    }
];


const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
console.log(currentQuizData.question);
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;        
        d_text.innerText = currentQuizData.d;

        currentQuestion++;
}



