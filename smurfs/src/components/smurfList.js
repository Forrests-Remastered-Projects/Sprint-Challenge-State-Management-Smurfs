import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./smurf";
import { getSmurfs } from "../actions/index";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, [props]);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id + smurf.name} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
