// Actions
const SET_RIGS = "Spots/oilrigs/SET_RIGS";
const SET_LOCATION = "Spots/oilrigs/SET_LOCATION";
const SET_FILTERS = "Spots/oilrigs/SET_FILTERS";
const SET_LOADING = "Spots/oilrigs/SET_LOADING";

// Initial state
const INITIAL_STATE = {
  spots: [],
  mylocation: {
    latitude: 29.3013,
    longitude: -94.7977
  },
  filters: {
    sort: "distance",
    type: "all",
    option_full: true,
    option_rated: true
  },
  loading: false
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_RIGS:
      return {
        ...state,
        spots: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}

// Actions
export function setRigs(payload) {
  return dispatch => {
    dispatch({
      type: SET_RIGS,
      payload
    });
  };
}

export function setLocation(payload) {
  return dispatch => {
    dispatch({
      type: SET_LOCATION,
      payload
    });
  };
}

export function setFilters(payload) {
  return dispatch => {
    dispatch({
      type: SET_FILTERS,
      payload
    });
  };
}

export function setLoading(payload) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      payload
    });
  };
}
