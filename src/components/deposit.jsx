import React from "react";

// Create a function to hold input values
function DepositInput(prop) {
  return (
    <>
      <div className="deposit col">
        <label className="col-5">Enter your deposit: </label>
        {/* Value depends on the user input, the input is then passed to event handler */}
        <input
          type="text"
          value={prop.deposit}
          onChange={(event) => prop.handleChange(event.target.value)}
          placeholder="Enter deposit amount"
          // define classes for boostrap
          className="col-5 form-control-sm"
        />
      </div>
    </>
  );
}

export default DepositInput;
