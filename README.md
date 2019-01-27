
  Game Flow / Logic -

  First Iteration

  GamePlay

    - load questions from "all" questions list, should I do this upon loading ...yes.
      - then in the playGame component,

        -send all questions from api from 'api/questions' and load to state in reducer
        -then create a method called loadGameQuestions,
              -[DONE] that will filter and return only the questions that don't have the current_user's id
              - that will filter questions with Id only above the lastQuestionAnsweredId

        - [DONE] question should have author name attribute ... which can be added in rails with self.user.username

    - Game Mode
        - The card will HAVE to be a form, very similar to the form you had created for the question creation form.
        - Question [by user] will have to be displayed.
        - Then, something will have to happen on submit.
        - It will have to re-render with new object from the question array each time.
        - Here, streak will have to be updated
