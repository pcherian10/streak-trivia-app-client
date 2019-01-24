import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer'
//import RankingsContainer from './RankingsContainer'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render() {

    return (
      <div>
        Dashboard
        <QuestionsContainer />
      </div>
    );

  }

}


export default Dashboard;
