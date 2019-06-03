let questionNumber = 0;
let userScore = 0;

function handleHomePageReturn() {
    //this function allows the user to click "turn back"
    // to return to the beginning of the quiz
    $('.turn-back').click(function()
    {
    console.log('`handleHomePageReturn ran`');
    let questionNumber = 0;
    let userScore = 0;
    $('.questions-and-answers').remove();
    $('.landing-page').css('display, block');
    })
}
function startQuiz() {
    //this function allows the user to start the quiz
    $('.start-button').click(function() {
    console.log('`startQuiz ran`');
        $('.questions-and-answers').css('display', 'block');
        $('.landing-page').remove();
        displayQuestion();
    })
}
function displayQuestion() {
        // this function displays the questions and answers
        console.log('`displayQuestion ran`');
        $('.questions-and-answers').html(displayQuiz());

    }
function displayQuiz() {
        // this function handles displaying the quiz questions
        console.log('`displayQuiz ran`');
        if (questionNumber < quizData.length) {
            return `<section class="question-${questionNumber}" id="quiz-section">
            <h2>${quizData[questionNumber].question}</h2>
            <header>
                <h2>Questions</h2>
            </header>
            <form>
                <fieldset name = "question-and-answers">
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[0]}"
                name="answer"  required>
                <span>${quizData[questionNumber].answers[0]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[1]}"
                name="answer"  required>
                <span>${quizData[questionNumber].answers[1]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[2]}"
                name="answer"  required>
                <span>${quizData[questionNumber].answers[2]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[3]}"
                name="answer"  required>
                <span>${quizData[questionNumber].answers[3]}</span>
                </label>
                <button type="submit" class="raven-button">Send a Raven</button>
                </fieldset>
                </form> 
            
        </section>`
        }
}

function nextQuestion() {
    //this function will advance the user to the next question
    console.log('`nextQuestion ran`');
}

function currentQuestion() {
    //this function will show the user which question they're on
    console.log('currentQuestion ran`');
}

function handleUserAnswer() {
    //this function detects if the user answered correctly or incorrectly
    console.log('`handleUserAnswer ran`');
    $('form').on('submit', function(event) {
        event.preventDefault();
        let userChoice = $('input:checked');
        let answer = userChoice.val();
        let correctAnswer = `${quizData[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            handleCorrectAnswer();
            handleUserScore();
        } else {
            handleIncorrectAnswer();

        }
    });
}


function handleCorrectAnswer() {
    //this function displays text if the user got the answer right
    console.log('`handleCorrectAnswer ran`');
    $('.questions-and-answers').html(`<section class="right-answer">
    <p>You got it right!</p></section>`);

    //return ("You got it right!");
    
}

function handleIncorrectAnswer() {
    //this function displays text if the user got the answer wrong
    console.log('`handleIncorrectAnswer ran`');
}
function handleUserScore() {
    
    console.log('`handleUserScore ran`');
    userScore++;

}

function displayUserResults() {
    //this function will tell the user if they're right or wrong with their answer
    //and display the correct answer if they're wrong
    console.log('`handleUserScore ran`');
}

function displayUserScore() {
    //this function displays the user's score
    console.log('`displayUserScore ran`');
    //return userScore;
}

function handlePictureDisplay() {
    //this function will display different pictures based on
    //if the user got the question right or wrong
    console.log('`handlePictureDisplay ran`');
}

function showTotalScore() {
    //this function will display the user's total score at the end of the quiz
    console.log('`showTotalScore ran`');
}

function startNewQuiz() {
    //this function will allow the user to start a new quiz
    console.log('`startNewQuiz ran`');
}

function handleQuiz() {
    startQuiz();
    handleHomePageReturn();
    handleUserAnswer();
    


}

$(handleQuiz);