$(document).ready(function(){
  const trivia = [
    {
      question:'something here',
      choices:['first choice here', 'second choice here', 'third choice here', 'fourth choice here'],
      answer:'first choice here'
    }
  ]

  var currentIndex = 0
  var currentQuestion

  function startGame () {
    $('.start-menu').hide()
    selectQuestion()

  }

  function selectQuestion () {
    currentQuestion = trivia[currentIndex]
    displayQuestion()
    currentIndex++
  }

  function displayQuestion() {
    let questionText = currentQuestion.question
    questionHtml = "<p class = 'question'>" + questionText + "</p>"
    $('.game').append(questionHtml)
    displayChoices()
    $('.game').show()

    // take data from `currentQuestion` and display it in the
    // DOM using jQuery
  }

  function displayChoices() {
    let choicesText = currentQuestion.choices
    for (i = 0; i<choicesText.length; i++){
      choicesHtml = "<p class='choices' data-choice='" + i + "'>" + choicesText[i] + "</p>"
      $('.game').append(choicesHtml)
    }
    userSelection()

  }
  function userSelection() {
    $('.choices').click(function( e ){
      let choicesText = currentQuestion.choices
      let userAnswer = $(this).data("choice")
      parseInt(userAnswer)
      //parseInt(target)
      if (choicesText[userAnswer] === currentQuestion.answer){
        //correctAnswer()
      }
      else {
        //incorrectAnswer()
      }
      // follow up: research jQuery methods for getting data attributes
    })
  }
  var choicesHtml
  $('#start-button').click(startGame)
})
