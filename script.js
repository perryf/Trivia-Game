$(document).ready(function(){
  const trivia = [
    {
      question:'What was Lord Helmet doing privately in his room that he did not want anyone to see?',
      choices:['He was playing with dolls', 'He was going to the bathroom', 'He was watching Spaceballs', 'He was looking at a picture of Princess Vespa'],
      answer:'He was playing with dolls'
    },
    {
      question:'What did the alien do after it jumped out of the guys stomach at the bar?',
      choices:['It ate everyone', 'It sang and danced','It had a drink', 'It died'],
      answer:'It sang and danced'
    },
    {
      question:'What was Pongo(a movie reviewer) going to review on tv?',
      choices:['Rocky 500', 'Rocky 5', 'Rocky 5000', 'Rocky 50000'],
      answer:'Rocky 5000'
    },
    {
      question:'How did Pizza The Hut die?',
      choices:['He ate himself to death', 'Birds ate him', 'People ate him', 'His cheese expired'],
      answer:'He ate himself to death'
    },
    {
      question:'What happened when Lord helmet was going to push the cancelation button?',
      choices:['There wasnt one', 'It was out of order', 'They couldnt find it', 'It cost 5 dollars'],
      answer:'It was out of order'
    },
    {
      question:'How fast can Spaceball 1 go?',
      choices:['Hyper Active Speed', 'Ridiculous Speed', 'Crazy Speed', 'Ludicrous Speed'],
      answer:'Ludicrous Speed'
    },
    {
      question:'What flavour of jam does LoneStar jam SpaceBall 1s radar with?',
      choices:['Strawberry', 'Raspberry', 'Blueberry', 'Blackberry'],
      answer:'Raspberry'
    },
    {
      question:'What does Lone Starr say when the little sand people (the ones that say dink all the time) wake him up?',
      choices:['Well this isnt Florida', 'When did we get to Disney Land?', 'We arent in Kansas anymore', 'You dont see this everyday'],
      answer:'When did we get to Disney Land?'
    },
    {
      question:'Who gets the last escape pod?',
      choices:['The Bear', 'The Bearded Lady', 'The President', 'The Drummer'],
      answer:'The Bear'
    },
    {
      question:'What did the radar guys radar lose?',
      choices:['buzzes, hums, bleeps', 'Its mind', 'lines, whirls, twirls', 'beeps, sweeps, creeps'],
      answer:'beeps, sweeps, creeps'
    }
  ]
  var totalCorrect = 0
  var totalWrong = 0
  var allChoicesHtml = ""
  var currentIndex = 0
  var currentQuestion

  function startGame () {
    $('.health-bar-box').show()
    $('.health-bar').width(600)
    $('.end').hide()
     totalCorrect = 0
     totalWrong = 0
     allChoicesHtml = ""
     currentIndex = 0
     currentQuestion

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
    //$('.game').html(questionHtml)
    displayChoices()
    $('.game').show()

    // take data from `currentQuestion` and display it in the
    // DOM using jQuery
  }

  function displayChoices() {
    let choicesText = currentQuestion.choices
    for (i = 0; i < choicesText.length; i++){
      choicesHtml = "<p class='choices' data-choice='" + i + "'>" + choicesText[i] + "</p><br>"
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
      newWidth = $('.health-bar').width()
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
    $('.health-bar').width(function(){
      newWidth = $('.health-bar').width()
      newWidth -= 100
      $('.health-bar').width(newWidth)
      checkWin()
    })
    correctImageHtml = "<img src='check.jpg' alt = 'Correct'>"
    $('.rightOrWrong').html(correctImageHtml)
    $('.rightOrWrong').show()

    nextQuestion()
  }

  function checkWin(){
    if (newWidth == 0){
      endGameWin()
    }
  }
  function endGameWin() {
    $('.health-bar-box').hide()
    endScreenWin = "<p class = 'endWin'>Congratulations you have beaten the challenge</p>"
    $('.end').html(endScreenWin)
    endGame()
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
    if (currentIndex < trivia.length && newWidth > 0){
      selectQuestion()
    }
    else if (newWidth == 0){
      endGameWin()
    }
    else {
      endGame()
    }
  }
  function endGame() {
    endScreenHtml = "<p class='ending'> You answered " + totalCorrect + " questions correctly and " + totalWrong + " incorrectly </p> <button type='button' id = 'reset-button'> Try Again?</button>"

    $('.end').append(endScreenHtml)
    $('.end').show()
    $('#reset-button').click(startGame)
  }
  var choicesHtml
  $('#start-button').click(startGame)
  $('#reset-button').click(startGame)
})
