import React from "react";

const smurf = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <h1>{props.smurf.age}</h1>
      <h1>{props.smurf.height}</h1>
    </div>
  );
};

export default smurf;
