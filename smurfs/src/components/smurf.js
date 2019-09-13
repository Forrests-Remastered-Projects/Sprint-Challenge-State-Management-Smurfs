import React from "react";

const smurf = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <h4>{props.smurf.age}</h4>
      <h5>{props.smurf.height}</h5>
    </div>
  );
};

export default smurf;
