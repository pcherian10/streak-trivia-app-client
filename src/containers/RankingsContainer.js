import React, {Component} from 'react'
import Rankings from '../components/Rankings'
import { connect } from 'react-redux'

class RankingsContainer extends Component {

  render() {
    const rankings = this.props.users.map((u,i) => {
      return <Rankings key={i} user={u}/>
    });

    return (
      <div>
        {rankings}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {users: state.stats.users}
}

export default connect(mapStateToProps)(RankingsContainer)
