import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class Geolocation extends Component {
  componentDidMount() {
    this.props.fetchGeolocation()
  }  
  
  render() {
    const {latitude, longitude} = this.props;
    var geocoder = new google.maps.Geocoder();
    var sitepoint = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        zoom: 16,
        center: sitepoint
    }
    var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions)
    var marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: sitepoint
    });
              
    geocoder.geocode({
        latLng: marker.getPosition()
      },
      (responses) => {
        if (responses && responses.length > 0) {
          document.getElementById('address').innerHTML = responses[0].formatted_address;
        }
      });

    google.maps.event.addListener(marker, 'dragend', (e) => {
      var obj = marker.getPosition();
      document.getElementById('info').innerHTML = e.latLng;

      map.panTo(marker.getPosition());

      geocoder.geocode({
          latLng: obj
        }, (responses) => {
          if (responses && responses.length > 0) {
            document.getElementById('address').innerHTML = responses[0].formatted_address;
          }
        });
      });

    return (
      <div></div>
    )
  }
}

Geolocation.propTypes = {
  latitude : PropTypes.number.isRequired,
  longitude : PropTypes.number.isRequired,
  fetchGeolocation: PropTypes.func.isRequired
}