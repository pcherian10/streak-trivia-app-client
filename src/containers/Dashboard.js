import React, { Component } from 'react';
import RankingsContainer from './RankingsContainer'
import { connect } from 'react-redux'
import { rankedUsers } from '../actions/index'

class Dashboard extends Component {

  componentWillUpdate() {
    this.props.rankedUsers()
  }

  render() {
    return (
      <div>
        <RankingsContainer />
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    rankedUsers: () => dispatch(rankedUsers())
  }
}

export default connect(null, mapDispatchToProps) (Dashboard);
