$(document).ready(function(){
  const trivia = [
    {
      question:'something here',
      choices:['first choice here', 'second choice here', 'third choice here', 'fourth choice here'],
      answer:'first choice here'
    },
    {
      question:'test for question 2',
      choices:['test choice 1', 'test choice 2'],
      answer:'test choice 2'
    }
  ]
  var totalCorrect = 0
  var totalWrong = 0
  var allChoicesHtml = ""
  var currentIndex = 0
  var currentQuestion

  function startGame () {
    var totalCorrect = 0
    var totalWrong = 0
    var allChoicesHtml = ""
    var currentIndex = 0
    var currentQuestion
    const trivia = [
      {
        question:'something here',
        choices:['first choice here', 'second choice here', 'third choice here', 'fourth choice here'],
        answer:'first choice here'
      },
      {
        question:'test for question 2',
        choices:['test choice 1', 'test choice 2'],
        answer:'test choice 2'
      }
    ]
    $('.start-menu').hide()
    selectQuestion()

  }

  function selectQuestion () {
    allChoicesHtml = ""
    currentQuestion = trivia[currentIndex]
    currentIndex++
    displayQuestion()
  }

  function displayQuestion() {
    let questionText = currentQuestion.question
    questionHtml = "<p class = 'question'>" + questionText + "</p>"
    // $('.game').html(questionHtml)
    displayChoices()
    $('.game').show()

    // take data from `currentQuestion` and display it in the
    // DOM using jQuery
  }

  function displayChoices() {
    let choicesText = currentQuestion.choices
    for (i = 0; i < choicesText.length; i++){
      choicesHtml = "<p class='choices' data-choice='" + i + "'>" + choicesText[i] + "</p>"
      allChoicesHtml += choicesHtml
      // $('.game').append(choicesHtml)
    }
    showAll ="<div class = gameBoard> "+questionHtml+allChoicesHtml+"</div>"
    $('.game').html(showAll)
    userSelection()
  }
  function userSelection() {
    $('.choices').click(function( e ){
      let choicesText = currentQuestion.choices
      let userAnswer = $(this).data("choice")
      parseInt(userAnswer)
      //parseInt(target)
      if (choicesText[userAnswer] === currentQuestion.answer){
        correctAnswer()
        $('.gameBoard').remove()
        totalCorrect++
        console.log(totalCorrect)
      }
      else {
        incorrectAnswer()
        $('p').remove()
        totalWrong++
        console.log(totalWrong)
      }
      // follow up: research jQuery methods for getting data attributes
    })
  }
  function correctAnswer(){
    $('.game').hide()
    correctImageHtml = "<img src='check.jpg' alt = 'Correct'>"
    $('.rightOrWrong').html(correctImageHtml)
    $('.rightOrWrong').show()

    nextQuestion()
  }

  function incorrectAnswer() {
    $('.game').hide()
    incorrectImageHtml = "<img src='wrong.png' alt = 'Incorrect'>"
    $('.rightOrWrong').html(incorrectImageHtml)
    $('.rightOrWrong').show()
    nextQuestion()
  }
  function nextQuestion() {
    setTimeout(checkQuestions, 3000)
  }
  function checkQuestions() {
    $('.rightOrWrong').hide()

    console.log(currentIndex)
    if (currentIndex < trivia.length){
      selectQuestion()
    }
    else {
      endGame()
    }
  }
  function endGame() {
    endScreenHtml = "<p class='ending'> You answered " + totalCorrect + " questions correctly and " + totalWrong + " incorrectly </p> "
    // <button type='button' id = 'reset-button'> Reset</button>

    $('.end').html(endScreenHtml)
    $('.end').show()
  //  $('#reset-button').click(startGame)
  }
    // setTimeout for 3000
    // callback fn
    //   1. hide rightOrWrong
    //   2. Check currentIndex and questions.length
    //     A. call displayQuestion
    //     B. End Game
  var choicesHtml
  $('#start-button').click(startGame)
  $('#reset-button').click(startGame)
})
