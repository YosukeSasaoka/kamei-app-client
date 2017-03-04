import * as actions from '../actions/geolocation';

const initialState = {
  markers: [],
};

function getMarkers(data) {
  const markers = [];
  data.mine.data.forEach((geolocation) => {
    markers.push(makeMarker(geolocation, 'http://maps.google.com/mapfiles/ms/icons/blue.png'));
  });
  data.other.data.forEach((geolocation) => {
    markers.push(makeMarker(geolocation, 'http://maps.google.com/mapfiles/ms/icons/red.png'));
  });
  return { markers };
}

function makeMarker(geolocation, icon)
{
  return {
      label: geolocation.name,
      position: {
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      },
      icon
  }
}


export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_GEOLOCATIONS: {
      return Object.assign({
        markers: [],
      });
    }
    case actions.LOAD_GEOLOCATIONS_REQUEST: {
      return Object.assign({
        markers: [],
      });
    }
    case actions.LOAD_GEOLOCATIONS_RESULT: {
      const { markers } = getMarkers(action.result);
      return Object.assign({
        markers,
      });
    } 
    default:
      return state;
  }
}