import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../adaptors/api'
import '../../App.css';
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'


/*
  Game Flow / Logic -

  First Iteration

  GamePlay

    - load questions from "all" questions list, should I do this upon loading ...yes.
      - then in the playGame component,

        -send all questions from api from 'api/questions' and load to state in reducer
        -then create a method called loadGameQuestions,
              - that will filter and return only the questions that don't have the current_user's id
              - that will filter questions with Id only above the lastQuestionAnsweredId

        - [DONE] question should have author name attribute ... which can be added in rails with self.user.username

    -

      -


*/
