let questionNumber = 0;
let userScore = 0;
let displayNumber = 1;

function handleHomePageReturn() {
    //this function allows the user to click "turn back"
    // to return to the beginning of the quiz
    $('.turn-back').on('click', function(event)
    {
    console.log('`handleHomePageReturn ran`');
    let questionNumber = 0;
    let userScore = 0;
    $('.questions-and-answers').remove();
    $('.landing-page').css('display, block');
    });
}
function startQuiz() {
    //this function allows the user to start the quiz
    $('.start-button').on('click', function(event) {
    console.log('`startQuiz ran`');
        $('.questions-and-answers').css('display', 'block');
        $('.landing-page').remove();
        displayQuestion();
        
    });
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
            return `<section class = "statistics">
            <header>
                <h2>Your Statistics</h2>
            </header>
            <p class = "year-number">Year: ${displayNumber}</span>/10</p>
            <p class = "user-score">Supporters: ${userScore}/10 Houses</p>
        </section>
        <section class="question-${questionNumber}" id="quiz-section">
            <h2>${quizData[questionNumber].question}</h2>
            <header>
                <h2>Questions</h2>
            </header>
            <form>
                <fieldset name = "question-and-answers">
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[0]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[0]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[1]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[1]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[2]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[2]}</span>
                </label>
                <label class="answer-choices">
            <input type="radio" value="${quizData[questionNumber].answers[3]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[3]}</span>
                </label>
                <button type="submit" class="raven-button">Send a Raven</button>
                </fieldset>
                </form> 
            
        </section>`;
        } else {
            handleUserResults();
            startNewQuiz();
            wantIt();
            dontWantIt();

        }
}

function nextQuestion() {
    //this function will advance the user to the next question
    console.log('`nextQuestion ran`');
    $('.questions-and-answers').on('click', '.next-question', function(event) {
        event.preventDefault();
        //if (questionNumber < 10) {
        questionNumber++;
        displayQuestion();
    });// else {
        //handleUserResults();
    //}
  //});
}


/*function currentQuestion() {
    //this function will show the user which question they're on
    console.log('`currentQuestion ran`');
    questionNumber = `${quizData[questionNumber].val}` + 1;
}*/

function handleUserAnswer() {
    //this function detects if the user answered correctly or incorrectly
    console.log('`handleUserAnswer ran`');
    $('.questions-and-answers').on('click', '.raven-button', function(event) {
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
        handleDisplayNumber();
    });
}
function handleDisplayNumber() {
    displayNumber++;
}


function handleCorrectAnswer() {
    //this function displays text if the user got the answer right
    console.log('`handleCorrectAnswer ran`');
    let house = `${quizData[questionNumber].house}`;
    $('.questions-and-answers').html(`<section class="right-answer">
    <p>Correct! The people are impressed with your knowledge and you gain the support of ${house} sympathizers.</p>
    <button type="submit" class="next-question">Next Question</button>
    </section>`);
    
}

function handleIncorrectAnswer() {
    //this function displays text if the user got the answer wrong
    console.log('`handleIncorrectAnswer ran`');
    let correctAnswer = `${quizData[questionNumber].correctAnswer}`;
    let house = `${quizData[questionNumber].house}`;
    $('.questions-and-answers').html(`<section class="wrong-answer">
    <p>Incorrect! The correct answer is ${correctAnswer}. You were unable to gain the support of ${house} sympathizers.</p>
    <button type="submit" class="next-question">Next Question</button>
    </section>`);
   
}

function handleUserResults() {
    console.log('`handleUserResults ran`');
    if (userScore >= 8) {
        $('.questions-and-answers').html(`<section class="winning-score">
        <header>
        <h2>Protector of the Realm</h2>
        </header>
        <p>You won the support of ${userScore}/10 houses.</p>
        <p>Congratulations! The people are impressed with your knowledge of the history of the realm and their heroes.
        Your Supporting Houses help you take the Iron Throne and install yourself as Protector of the Realm. Only one question
        remains... Do you want it?</p>
        <button type="sumbit" class="want-it">I want it</button><button type="submit" class="dont-want-it">I don't want it</button>
        </section>`);
    
    }
    else if (userScore < 8 && userScore >= 5) {
        $('.questions-and-answers').html(`<section class="master-whispers">
        <header>
        <h2>Master of Whisperers</h2>
        </header>
        <p>You won the support of ${userScore}/10 houses.</p>
        <p>You did not gain enough support to take the Iron Throne, but you impressed enough Houses to help cover up your
        scheming ways. You continue to work in the shadows and gain knowledge about the happenings in the realm,
        while your true motivations and loyalty remain unknown.
        <button type="submit" class="try-again">Try Again</button><section>`);
    } else {
        $('.questions-and-answers').html(`<section class="losing-score">
        <header>
        <h2>Valar Morghulis</h2>
        </header>
        <p>You won the support of ${userScore}/10 houses.</p>
        <p>You did not survive the world of Westeros. The Protector of the Realm uncovers your scheming for the throne, and you
        are sentenced to death. Better luck next time.</p>
        <button type="submit" class="try-again">Try Again</button></section>`);
    }
}
function handleUserScore() {
    
    console.log('`handleUserScore ran`');
    userScore++;

}

function wantIt() {
    console.log('`wantIt ran`');
    $('.questions-and-answers').on('click', '.want-it', function(event) {
        event.preventDefault();

    $('.questions-and-answers').html(`<section class="want-it">
        <header>
        <h2>Protector of the Realm</h2>
        </header>
        <p>Congratulations! You have chosen to sit on the Iron Throne and rule over the people of Westeros.
        Long may you reign!</p>
        <button type="submit" class="try-again">Play Again</button></section>`);
    });

}

function dontWantIt() {
    console.log('`dontWantIt ran`');
    $('.questions-and-answers').on('click', '.dont-want-it', function(event) {
        event.preventDefault();
    $('.questions-and-answers').html(`<section class="dont-want-it">
        
        <p>You have chosen to abdicate the throne and live out your days in a different life of your choosing. Your supporters
        work to make sure you remain safe and free from the political reach of the realm.</p>
        <button type="submit" class="try-again">Play Again</button></section>`);
});

}


function displayUserResults() {
    //this function will tell the user if they're right or wrong with their answer
    //and display the correct answer if they're wrong
    console.log('`displayUserScore ran`');
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
    $('.questions-and-answers').on('click', '.try-again', '.play-again', function(event) {
        /*event.preventDefault();
        let questionNumber = 0;
        let userScore = 0;
        $('.questions-and-answers').remove();
        $('.landing-page').css('display, block');
        })*/
        location.reload();
    
    });
}


function handleQuiz() {
    startQuiz();
    handleHomePageReturn();
    handleUserAnswer();
    nextQuestion();
    


}

$(handleQuiz);