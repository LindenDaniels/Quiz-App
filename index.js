let questionNumber = 0;
let userScore = 0;
let displayNumber = 1;
function showTurnBack() {
    console.log('`showTurnBack ran`');
    $('.turn-back').html(`<a href="#">Turn Back</a>`);
}
function handleHomePageReturn() {
    //this function allows the user to click "turn back"
    // to return to the beginning of the quiz
    $('.turn-back').on('click', function(event)
    {
    event.preventDefault();
    console.log('`handleHomePageReturn ran`');
    let questionNumber = 0;
    let userScore = 0;
    $('.questions-and-answers').remove();
    $('.landing-page').css('display, block');
    });
}
function startQuiz() {
    //this function allows the user to start the quiz
    $('#start-button').on('click', function(event) {
    console.log('`startQuiz ran`');
        $('.questions-and-answers').css('display', 'block');
        
        $('.landing-page').remove();
        $('#main-header').remove();
        showTurnBack();
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
          
            return `<section class="quiz-stuff">
            <section class = "statistics">
            <p class = "year-number">Year: ${displayNumber}/10</p>
            <p class = "user-score">Supporting Houses: ${userScore}</p>
        </section>
        <section class="question-${questionNumber}" id="quiz-section">
            <h2 class="quiz-header" id="question-asked">${quizData[questionNumber].question}</h2>
           
            <form>
                <fieldset name = "question-and-answers">
                <label class="answer-choices">
            <input class="radio-input" type="radio" value="${quizData[questionNumber].answers[0]}"
                name="answer" required />
                <span>${quizData[questionNumber].answers[0]}</span>
                </label>
                <label class="answer-choices">
            <input class="radio-input" type="radio" value="${quizData[questionNumber].answers[1]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[1]}</span>
                </label>
                <label class="answer-choices">
            <input class="radio-input" type="radio" value="${quizData[questionNumber].answers[2]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[2]}</span>
                </label>
                <label class="answer-choices">
            <input class="radio-input" type="radio" value="${quizData[questionNumber].answers[3]}"
                name="answer" required>
                <span>${quizData[questionNumber].answers[3]}</span>
                </label>
                <button type="submit" class="quiz-button" id="raven-button">Send a Raven</button>
                </fieldset>
                </form> 
                </section>  
        </section>`;
        } else {
            handleUserResults();
            startNewQuiz();
            wantIt();
            dontWantIt();
            $('.turn-back').remove();
        }
}
function nextQuestion() {
    //this function will advance the user to the next question
    console.log('`nextQuestion ran`');
    $('.questions-and-answers').on('click', '#next-question', function(event) {
        event.preventDefault();
        questionNumber++;
        displayQuestion();
    });
}
function handleUserAnswer() {
    //this function detects if the user answered correctly or incorrectly
    console.log('`handleUserAnswer ran`');
    $('.questions-and-answers').on('submit', 'form', function(event) {
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
    $('.questions-and-answers').html(`<section class="answer-section"><img src="${quizData[questionNumber].answerImg}" alt="${quizData[questionNumber].alt}"/>
    <p class="answer-text">Correct! The people are impressed with your knowledge and you gain the support of ${house} sympathizers.</p>
    <button type="submit" class="quiz-button" id="next-question">Next Question</button>
    </section>`);
    
}

function handleIncorrectAnswer() {
    //this function displays text if the user got the answer wrong
    console.log('`handleIncorrectAnswer ran`');
    let correctAnswer = `${quizData[questionNumber].correctAnswer}`;
    let house = `${quizData[questionNumber].house}`;
    $('.questions-and-answers').html(`<section class="answer-section"><img src="${quizData[questionNumber].answerImg}" class="incorrect-img" alt="${quizData[questionNumber].alt}"/>
    <p class="answer-text">Incorrect! The correct answer is ${correctAnswer}. You were unable to gain the support of ${house} sympathizers.</p>
    <button type="submit" class="quiz-button" id="next-question">Next Question</button>
    </section>`);
   
}

function handleUserResults() {
    console.log('`handleUserResults ran`');
    if (userScore >= 8) {
        $('.questions-and-answers').html(`<section class="winning-score">
        <header>
        <h2 class="quiz-header">Protector of the Realm</h2>
        </header>
        <a href="https://ibb.co/3mfPYG3"><img src="https://i.ibb.co/pjWkrG7/ironthrone.jpg" class="iron-throne" alt="The Iron Throne" border="0"></a><br />
        <p class="answer-text">Congratulations! You won the support of ${userScore}/10 houses.
        Your Supporting Houses help you take the Iron Throne and install yourself as Protector of the Realm. Only one question
        remains... Do you want it?</p>
        <button type="sumbit" class="quiz-button" id="want-it">I want it</button> <button type="submit" class="quiz-button" id="dont-want-it">I don't want it</button>
        </section>`);
    
    }
    else if (userScore < 8 && userScore >= 5) {
        $('.questions-and-answers').html(`<section class="answer-section">
        <header>
        <a href="https://ibb.co/VHQ2672"><img src="https://i.ibb.co/3fMBKDB/varys.jpg" alt="Varys" border="0"></a>
        <h2 class="quiz-header">Master of Whisperers</h2>
        </header>
        <p class="answer-text">You won the support of ${userScore}/10 houses.</p>
        <p class="answer-text">You did not gain enough support to take the Iron Throne, but you impressed enough Houses to help cover up your
        scheming ways. You continue to work in the shadows and gain knowledge about the happenings in the realm,
        while your true motivations and loyalty remain unknown.
        <button type="submit" class="quiz-button" id="try-again">Try Again</button><section>`);
    } else {
        $('.questions-and-answers').html(`<section class="answer-section">
        <header>
        <a href="https://ibb.co/HDjP3X9"><img src="https://i.ibb.co/Y7xdwbV/valarmor.jpg" alt="Valar Morghulis" border="0"></a><br />
        </header>
        <p class="answer-text>You won the support of ${userScore}/10 houses.</p>
        <p class="answer-text">You did not survive the world of Westeros. The Protector of the Realm uncovers your scheming for the throne, and you
        are sentenced to death. Better luck next time.</p>
        <button type="submit" class="quiz-button" id="try-again">Try Again</button></section>`);
    }
}
function handleUserScore() {
    
    console.log('`handleUserScore ran`');
    userScore++;
}

function wantIt() {
    console.log('`wantIt ran`');
    $('.questions-and-answers').on('click', '#want-it', function(event) {
        event.preventDefault();

    $('.questions-and-answers').html(`<section class="answer-section">
        <header>
        <h2 class="quiz-header">Protector of the Realm</h2>
        </header>
        <a href="https://ibb.co/3mfPYG3"><img src="https://i.ibb.co/pjWkrG7/ironthrone.jpg" class="iron-throne" alt="ironthrone" border="0"></a><br />
        <p class="answer-text">Congratulations! You have chosen to sit on the Iron Throne and rule over the people of Westeros.
        Long may you reign!</p>
        <button type="submit" class="quiz-button" id="play-again">Play Again</button></section>`);
    });

}

function dontWantIt() {
    console.log('`dontWantIt ran`');
    $('.questions-and-answers').on('click', '#dont-want-it', function(event) {
        event.preventDefault();
    $('.questions-and-answers').html(`
    <a href="https://ibb.co/VHQ2672"><img src="https://i.ibb.co/3fMBKDB/varys.jpg" class="varys-pic" alt="varys" border="0"></a>
    <section class="answer-section">
        <p class="answer-text">You have chosen to abdicate the throne and live out your days in a different life of your choosing. Your supporters
        work to make sure you remain safe and free from the political reach of the realm.</p>
        <button type="submit" class="quiz-button" id="play-again">Play Again</button></section>`);
});
}
function startNewQuiz() {
    //this function will allow the user to start a new quiz
    console.log('`startNewQuiz ran`');
    $('.questions-and-answers').on('click', '#try-again',  function(event) {
        location.reload();
    });
     $('.questions-and-answers').on('click', '#play-again',  function(event) {
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