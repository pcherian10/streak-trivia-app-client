
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


        question_list =[
          {text:"Americans are estifmated to bet $6 billion on what upcoming sports event?",
            first_choice: "Super Bowl",
            second_choice: "Quidditch Cup",
            third_choice: "Chessboxing Finals",
            correct_answer: "Super Bowl" },
          {text:"What area of the baseball field typically contains the greatest number of fielders?",
            first_choice: "Infield",
            second_choice: "Outfield",
            third_choice: "Pitcher's mount",
            correct_answer: "Infield" },
          {text:"What NBA star just requested to be traded from the New Orleans Pelicans?",
            first_choice: "Carmelo Anthony",
            second_choice: "Anthony Davis",
            third_choice: "Damian Lillard",
            correct_answer: "Anthony Davis" },
          {text:"In club soccer, the period of time where players are allowed to change teams is called what?",
            first_choice: "Trade deadline",
            second_choice: "Transfer window",
            third_choice: "Superdraft",
            correct_answer: "Transfer window" },
          {text:"What NFL team won the greatest number of shutouts in a single postseason?",
            first_choice: "Chicago Bears",
            second_choice: "Baltimore Ravens",
            third_choice: "Pittsburgh Steelers",
            correct_answer: "Chicago Bears" },
          {text:"Before James Harden, who was the last NBA MVP to primarily shoot left-handed?",
            first_choice: "Steve Nash",
            second_choice: "David Robinson",
            third_choice: "Charles Barkley",
            correct_answer: "David Robinson" },
          {text:"A mistakenly released Taylor Swift track, which hit No. 1 on iTunes Canada, was eight seconds of what?",
            first_choice: "Water running",
            second_choice: "Humming",
            third_choice: "White noise",
            correct_answer: "White noise" },
          {text:"The country that comes first alphabetically is located on what continent?",
            first_choice: "Europe",
            second_choice: "Africa",
            third_choice: "Asia",
            correct_answer: "Asia" },
          {text:"Which of these Jane Austen characters was introduced first?",
            first_choice: "Elinor Dashwood",
            second_choice: "Elizabeth Bennet",
            third_choice: "Emma Woodhouse",
            correct_answer: "Elinor Dashwood" },
          {text:"The three-minute-long tracking shot in “Goodfellas” ends on what legendary comedian?",
            first_choice: "Jack Benny",
            second_choice: "Don Rickles",
            third_choice: "Henny Youngman",
            correct_answer: "Henny Youngman" },
          {text:"In 1986, dozens of new animal species were discovered in a cave sealed off from the world in what country??",
            first_choice: "Romania",
            second_choice: "Ukraine",
            third_choice: "Moldova",
            correct_answer: "Romania" }

        ]


        question_list.each do |q|
          question = User.first.questions.build(q)
          question.save
        end

        user_list.each do |u|
          User.create(u)
        end
