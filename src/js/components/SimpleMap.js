import React from 'react'
import CSSModules from 'react-css-modules'
import style from './SimpleMap.less'
import Header from './Header'
import MapApp from '../containers/MapApp'

@CSSModules( style )
export default class SimpleMap extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <Header />
        <div styleName="simplemap">
          <div styleName="wrapper">
            <MapApp />
          </div>
        </div>
      </div>
    );
  }
}

