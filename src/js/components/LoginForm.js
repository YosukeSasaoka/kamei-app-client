import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router';

class LoginForm extends Component {
  state = {
    token: this.props.token || ''
  }

  handleSubmit(e) {
    e.preventDefault();
    const token = this.refs.token.value.trim();
    if (!token) {
      return;
    }
    this.props.onTokenSubmit(token);
    this.props.router.push('/SimpleMap');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div><input type="text" placeholder="Input name" ref="token" /></div>
        <div><input type="submit" value="ログイン" /></div>
      </form>
    )
  }
}

export default withRouter(LoginForm);

LoginForm.propTypes = {
  token: PropTypes.string,
  onTokenSubmit: PropTypes.func.isRequired
};
