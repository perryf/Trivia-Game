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
    }
  ]
  const bonusTrivia = [
    [
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
      },
      {
        question:'How many years of fresh air is there on Planet Druidia?',
        choices:['15,000', '10,000', '20,000', '25,000'],
        answer:'10,000'
      },
      {
        question:'What is the model year of Princess Vespas Mercedes Benz?',
        choices:['2001', '2000', '2002', '2015'],
        answer:'2001'
      },
      {
        question:'What is the number of the cell that Princess Vespa and Dot Matrix are being held in while they are in the spaceball prison?',
        choices:['1', '2', '3', '4'],
        answer:'2'
      }
    ],
    [
      {
        question:' How many spacebucks did Lonestar take from King Roland for lunch, gas and tolls?',
        choices:['547', '1,000,000', '356', '248'],
        answer:'248'
      },
      {
        question:' How many minutes are given to evacuate Spaceball 1 after the self-destruct button is activated?',
        choices:['5', '1', '3', '2'],
        answer:'3'
      },
      {
        question:'How long of a break does Dark Helmet say the Spaceballs should take?',
        choices:['4 minute', '5 minute', '6 minute', '7 minute'],
        answer:'5 minute'
      },
      {
        question:'What is the combination to Druidias airshield?',
        choices:['2, 4, 6, 8, 10', '1, 3, 5, 7, 9', '1, 2, 3, 4, 5', '1, 1, 1, 1, 1'],
        answer:'1, 2, 3, 4, 5'
      },
      {
        question:'What does the ship say right before it explodes?',
        choices:['Have a nice day', 'Have a good day', 'Goodbye', 'See ya'],
        answer:'Have a nice day'
      },
      {
        question:'How did the people in the diner know that they were on Pluto?',
        choices:['They asked someone', 'From the bark', 'That is where they were going', 'From a sign that says Pluto'],
        answer:'From the bark'
      },
      {
        question:'What planet do Lonestar and company crash land on?',
        choices: ['The Sandy Moon', 'The Moon of Yogurt', 'The Moon of Vega', 'The Moon of the Dinks'],
        answer:'The Moon of Vega'
      }
    ]
  ]
  var totalCorrect = 0
  var totalWrong = 0
  var allChoicesHtml = ""
  var currentIndex = 0
  var currentQuestion
  var healthBarCounter = 0
  var h = 0
  function startGame () {
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
    $('.health-bar-box').show()
    allChoicesHtml = ""
    // currentCategory = "spaceballs"
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
      if (healthBarCounter == 0){
      newWidth -= 150
      }
      else if (healthBarCounter == 1){
      newWidth -= 120
      }
      else if (healthBarCounter == 2){
        newWidth -= 100
      }
      $('.health-bar').width(newWidth)
    })
    correctImageHtml = "<img src='check.jpg' alt = 'Correct'>"
    $('.rightOrWrong').html(correctImageHtml)
    $('.rightOrWrong').show()

    nextQuestion()
  }

  // function endGameWin() {
  //   $('.health-bar-box').hide()
  //   endScreenWin = "<p class = 'endWin'>Congratulations you have beaten the challenge</p>"
  //   $('.end').html(endScreenWin)
  //   endGame()
  // }
  function incorrectAnswer() {
    $('.game').hide()
    incorrectImageHtml = "<img src='wrong.png' alt = 'Incorrect'>"
    $('.rightOrWrong').html(incorrectImageHtml)
    $('.rightOrWrong').show()
    nextQuestion()
  }
  function nextQuestion() {
    setTimeout(checkQuestions, 2000)
  }
  function checkQuestions() {
    $('.rightOrWrong').hide()
    if (currentIndex < trivia.length && newWidth > 0){
      selectQuestion()
    }
  else if (newWidth == 0 && currentIndex <= trivia.length && healthBarCounter < 2){
      healthBarCounter ++
      trivia.push(...bonusTrivia[h])
      h++
      newWidth += 600
      $('.health-bar').width(newWidth)
      selectQuestion()
    }
    else if (newWidth == 0 && currentIndex <= trivia.length && healthBarCounter >= 2){
      healthBarCounter++
      endGame()
      //setTimeout(endGame, 2000)
    }
    else {
      endGame()
      //setTimeout(endGame, 2000)
    }
  }
  function endGame() {
    endScreenHtml = "<p class = 'bosses'> You cleared " + healthBarCounter + " stage(s).  Great job!</p> <p class='ending'> You answered " + totalCorrect + " questions correctly and " + totalWrong + " incorrectly </p> <button type='button' id = 'reset-button'> Try Again</button>"
    // endScreenHtml = `<p class='bosses'>You cleared ${ healthBarCounter === 1 ? '1 stage' : 'stages' }. Great job!</p>`
    // endScreenHtml += "<p class='ending'> You answered " + totalCorrect + " questions correctly and " + totalWrong + " incorrectly </p> <button type='button' id = 'reset-button'> Try Again?</button>"
    $('.health-bar-box').hide()
    $('.end').append(endScreenHtml)
    $('.end').show()
    $('#reset-button').click(startGame)
  }
  var choicesHtml
  $('#start-button').click(startGame)
  $('#reset-button').click(startGame)
})
