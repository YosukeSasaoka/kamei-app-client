import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Login.less';
import Header from './Header';
import LoginApp from '../containers/LoginApp'

@CSSModules( style )
export default class Login extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <Header />
        <div styleName="login">
          <div styleName="wrapper">
            <LoginApp />
          </div>
        </div>
      </div>
    );
  }
}
