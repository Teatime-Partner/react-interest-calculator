import React from "react";

//create a function to hold a withdraw input value
function WithdrawInput(prop) {
  return (
    <>
      <div className="withdraw col">
        <label className="col-5">Enter amount to withdraw: </label>
        {/* Value of withdraw depends on the user input, the input is then passed to event handler for withdraw*/}
        <input
          type="text"
          value={prop.withdraw}
          onChange={(event) => prop.handleChange(event.target.value)}
          placeholder="Enter amount to withdraw"
          // define classes for bootstrap
          className="col-5 form-control-sm"
        />
      </div>
    </>
  );
}

export default WithdrawInput;
