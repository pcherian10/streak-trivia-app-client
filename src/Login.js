import React from 'react'
import api from './adaptors/api'
import { login, loadQuestions } from './actions/index'
import { connect } from 'react-redux'

class Login extends React.Component {

  constructor() {
    super ();
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }

  componentWillMount() {
    this.props.loadQuestions();
  }


  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields});
  };

  handleSubmit = e => {
    e.preventDefault();
    api.auth
    .login(this.state.fields.username, this.state.fields.password)
      .then(res => {
        if (res.error) {
          this.setState({error: true});
        } else {
          this.props.login(res);
          this.props.history.push('/dashboard')
        }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
                />
            </div>
            <div className="ui field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
            </div>
            <button type="submit" className="ui basic green button" >Submit</button>
          </form>
        </div>
      </div>
    );
  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    loadQuestions: () => dispatch(loadQuestions())
  }
}

export default connect(null, mapDispatchToProps)(Login)
