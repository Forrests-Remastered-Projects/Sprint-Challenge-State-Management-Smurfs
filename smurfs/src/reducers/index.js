import { GET_SMURFS, ADD_SMURF, ERROR, START_SMURFS } from "../actions/index";
const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return { ...state, fetchingSmurf: true, smurfs: action.payload };
    case ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: true };
    case ERROR:
      return { ...state, fetchingSmurf: true, error: action.payload };
    case START_SMURFS:
      return { ...state, fetchingSmurf: true, error: "" };
    default:
      return state;
  }
};
