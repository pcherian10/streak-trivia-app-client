import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react'

const QuestionCard = ({question}) => {

  return(
    <div>
      <Card.Group>
        <Header as="h3">{question.text}</Header>
          <Card fluid color='red' header={question.first_choice} />
          <Card fluid color='orange' header={question.second_choice} />
          <Card fluid color='yellow' header={question.third_choice} />
      </Card.Group>
    </div>
  )
}

export default (QuestionCard)
