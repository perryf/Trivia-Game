# Trivia-Game
<!-- Change the title to something more descriptive like "Space Balls Trivia" -->
## Objective
<!-- Rename this section User Stories or Features and add more to describe the visual functionality as well -->
User attempts to answer questions correctly.  If the user answers enough questions to drop the red bar to 0 then more questions will be added as they move on to the next stage.  First stage consists of 6 questions requiring 4 correct answers to move on, the second stage consists of 7 questions requiring 5 correct to advance, and the last stage consists of an additional 7 questions and requires 6 correct to advance.  If a user uses less questions than are in the stage to advance, then the left over questions will be added to the next stage.

## Technologies Used

Used Javascript to store the questions, choices, and answers.  Also created multiple functions to keep the code clean and readable.  
Used jQuery to manipulate the DOM, HTML, and CSS to have classes appear and disappear and to add listeners for events.  

## Approach

The first thing I did was to tackle the questions and how to store them such that I could call them easily, which I did by creating an array of objects with each of those objects being 1 question and its choices and answer. Next I worked on creating a function to iterate through the array of objects and grab each object and assign each of the objects values to its respective spot on screen.  After that I created functions to check weather the answer was correct or incorrect, give a result dependent on that, and interact with the bar on the top of the screen if the answer was correct.  After completing this, I worked on implementing the multi stage system that is in place currently where only once you complete the requirements for stage one are the questions for stage two added.  


## Unsolved Problems

There aren't really any unsolved problems, however there are some things that I would like to add to this game when I get the time.  The first being the option to have multiple different sections of questions and allowing the user to pick which one they want to start at and then when they finish a section they can pick which of the other sections they want to go to.  I would also like to implement a way of keeping track of the scores in each of those different sections.

<!-- README is pretty solid.  I'd also include a Setup Instructions section to let people know how to get the project on their computer and how to run it.  I would also make your sections a little more concise-->
