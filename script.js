// script.js - Main JavaScript file for Online Quiz Maker

// Utility functions
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getQuizzes() {
    return JSON.parse(localStorage.getItem('quizzes')) || [];
}

function saveQuizzes(quizzes) {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
    localStorage.removeItem('currentUser');
    updateUserInfo();
    window.location.href = 'index.html';
}

// Update user info in header
function updateUserInfo() {
    const userInfo = document.getElementById('user-info');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        userInfo.innerHTML = `Welcome, ${currentUser.username}! <a href="#" onclick="logout()">Logout</a>`;
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
    } else {
        userInfo.innerHTML = '';
        loginLink.style.display = 'inline';
        registerLink.style.display = 'inline';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateUserInfo();
});

// Registration
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    const users = getUsers();
    if (users.find(user => user.username === username)) {
        alert('Username already exists');
        return;
    }
    
    users.push({ username, password });
    saveUsers(users);
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
}

// Login
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        setCurrentUser(user);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}

// Quiz Creation
let questions = [];

function addQuestion() {
    const questionText = document.getElementById('question-text').value;
    const options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value
    ];
    const correctAnswer = parseInt(document.getElementById('correct-answer').value) - 1;
    
    if (!questionText || options.some(opt => !opt)) {
        alert('Please fill in all fields');
        return;
    }
    
    questions.push({
        question: questionText,
        options: options,
        correctAnswer: correctAnswer
    });
    
    // Clear form
    document.getElementById('question-text').value = '';
    options.forEach((_, i) => document.getElementById(`option${i+1}`).value = '');
    document.getElementById('correct-answer').value = '1';
    
    displayQuestions();
}

function displayQuestions() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    
    questions.forEach((q, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${q.question}<br>
            Options: ${q.options.join(', ')}<br>
            Correct Answer: ${q.options[q.correctAnswer]}
            <button onclick="removeQuestion(${index})">Remove</button>
        `;
        questionList.appendChild(li);
    });
}

function removeQuestion(index) {
    questions.splice(index, 1);
    displayQuestions();
}

function saveQuiz() {
    const quizTitle = document.getElementById('quiz-title').value;
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        alert('Please login to create a quiz');
        return;
    }
    
    if (!quizTitle || questions.length === 0) {
        alert('Please add a title and at least one question');
        return;
    }
    
    const quizzes = getQuizzes();
    quizzes.push({
        id: Date.now(),
        title: quizTitle,
        creator: currentUser.username,
        questions: questions
    });
    
    saveQuizzes(quizzes);
    alert('Quiz saved successfully!');
    questions = [];
    document.getElementById('quiz-title').value = '';
    displayQuestions();
}

// Quiz Listing
function displayQuizzes() {
    const quizList = document.getElementById('quiz-list');
    const quizzes = getQuizzes();
    
    quizList.innerHTML = '';
    
    quizzes.forEach(quiz => {
        const div = document.createElement('div');
        div.className = 'quiz-item';
        div.innerHTML = `
            <h3>${quiz.title}</h3>
            <p>Created by: ${quiz.creator}</p>
            <p>Questions: ${quiz.questions.length}</p>
            <a href="take-quiz.html?id=${quiz.id}" class="btn">Take Quiz</a>
        `;
        quizList.appendChild(div);
    });
}

// Quiz Taking
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = parseInt(urlParams.get('id'));
    
    const quizzes = getQuizzes();
    currentQuiz = quizzes.find(q => q.id === quizId);
    
    if (!currentQuiz) {
        alert('Quiz not found');
        window.location.href = 'quiz-list.html';
        return;
    }
    
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = currentQuiz.questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">
            <h2>Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}</h2>
            <p>${question.question}</p>
            <ul class="options">
                ${question.options.map((option, index) => `
                    <li>
                        <label>
                            <input type="radio" name="answer" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
                            ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>
        <div class="navigation">
            ${currentQuestionIndex > 0 ? '<button onclick="previousQuestion()">Previous</button>' : ''}
            ${currentQuestionIndex < currentQuiz.questions.length - 1 ? '<button onclick="nextQuestion()">Next</button>' : '<button onclick="submitQuiz()">Submit</button>'}
        </div>
    `;
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function previousQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }
}

function submitQuiz() {
    saveAnswer();
    const score = calculateScore();
    localStorage.setItem('quizResult', JSON.stringify({ quiz: currentQuiz, answers: userAnswers, score: score }));
    window.location.href = 'results.html';
}

function calculateScore() {
    let correct = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correct++;
        }
    });
    return correct;
}

// Results
function displayResults() {
    const result = JSON.parse(localStorage.getItem('quizResult'));
    if (!result) {
        window.location.href = 'index.html';
        return;
    }
    
    const { quiz, answers, score } = result;
    const totalQuestions = quiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    document.getElementById('results-container').innerHTML = `
        <h2>Quiz Results</h2>
        <p>You scored ${score} out of ${totalQuestions} (${percentage}%)</p>
        <h3>Review:</h3>
        ${quiz.questions.map((question, index) => `
            <div class="question-review">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p>Your answer: <span class="${answers[index] === question.correctAnswer ? 'correct-answer' : 'incorrect-answer'}">${question.options[answers[index] || 0]}</span></p>
                <p>Correct answer: <span class="correct-answer">${question.options[question.correctAnswer]}</span></p>
            </div>
        `).join('')}
        <a href="quiz-list.html" class="btn">Take Another Quiz</a>
    `;
    
    localStorage.removeItem('quizResult');
}