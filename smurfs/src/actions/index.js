import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const ERROR = "ERROR";
export const START_SMURFS = "START_SMURFS";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response.data);
      dispatch({ type: GET_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.errorMessage });
    });
};

function start() {
  return {
    type: START_SMURFS
  };
}

export const addSmurf = newSmurf => dispatch => {
  dispatch(start());
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log(response.data);
      dispatch({ type: ERROR, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.errorMessage });
    });
};
