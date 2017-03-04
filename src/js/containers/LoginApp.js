import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import * as LoginActions from '../actions/login'

const LoginApp = ({token, actions}) => (
  <div>
    <LoginForm token={token} onTokenSubmit={actions.submitToken} />
  </div>
)

LoginApp.propTypes = {
  token: PropTypes.string,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  token: state.token
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginApp)