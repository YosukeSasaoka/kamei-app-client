import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map/Map';
import * as geolocationActions from '../actions/geolocation';

const MapApp = ({geolocation, token, actions}) => (
  <div>
    <Map geolocation={geolocation} token={token} loadGeo={actions.loadGeolocations} />
  </div>
)

const mapStateToProps = state => ({
  geolocation: state.geolocation,
  token: state.login
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(geolocationActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapApp);
