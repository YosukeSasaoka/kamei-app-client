import axios from 'axios';

export const LOAD_GEOLOCATIONS = 'LOAD_GEOLOCATIONS';
export const LOAD_GEOLOCATIONS_REQUEST = 'LOAD_GEOLOCATIONS_REQUEST';
export const LOAD_GEOLOCATIONS_RESULT = 'LOAD_GEOLOCATIONS_RESULT';

function loadGeolocationsRequest() {
  return {
    type: LOAD_GEOLOCATIONS_REQUEST,
  };
}

function loadGeolocationsResult(result) {
  return {
    type: LOAD_GEOLOCATIONS_RESULT,
    result,
  };
}

export function loadGeolocations(token) {
  return (dispatch) => {
    dispatch(loadGeolocationsRequest());

    axios.all([loadMine(token), loadOther(token)]
    )
    .then(
      axios.spread( (mine, other) => {
        dispatch(loadGeolocationsResult(
        {
          mine,
          other
        }
      ))
    })).catch(response => 
      console.log(response)
    );
  };
}

function loadMine(token)
{
  return axios.get("http://192.168.1.102:3002/api/v1/geolocations/mine/", {
    params: {
      token
    }
  })
}

function loadOther(token)
{
  return axios.get("http://192.168.1.102:3002/api/v1/geolocations/other/", {
    params: {
      token
    }
  })
}
