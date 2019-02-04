import React from 'react'
import api from '../adaptors/api'
import { login } from '../actions/index'
import { connect } from 'react-redux'
import { Grid, Form, Button } from 'semantic-ui-react'

class SignUp extends React.Component {

  constructor() {
    super ();
    this.state = {
      error: false,
      fields: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        profile_pic: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields});
  };

  handleSubmit = e => {
    e.preventDefault();
    api.user
    .addUser(this.state.fields)
      .then(res => {
        if (res.error) {
          this.setState({error: true});
        } else {
          this.props.login(res);
          localStorage.setItem('token', res.id)
          this.props.history.push("/dashboard")
        }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
      {this.state.error ? <p>Check all fields, something went wrong!</p> : null}
      <br></br>
      <Grid centered>
        <Grid.Column width={6}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={fields.username}
              onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input
              name="first_name"
              type="text"
              placeholder="First"
              value={fields.first_name}
              onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="last_name"
              type="text"
              placeholder="Last"
              value={fields.last_name}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={fields.email}
              onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={fields.password}
              onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <input
             name="profile_pic"
             type="hidden"
             value={fields.profile_pic}/>
          </Form.Field>
          <Button type="submit">Sign Up!</Button>
        </Form>
        </Grid.Column>
      </Grid>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
