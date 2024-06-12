import React from "react";

//create interest function button that takes setState from DisplayBalance(balance.jsx)as props
function AddInterest({ balance, setBalance, transactions, setTransactions }) {
  //handle the onClick event to add Interest to the balance
  function handleAddInterest() {
    //create variable to hold the interest amount based on the current balance in the account
    const interestAmount = balance * 0.02;
    //create variable to hold new balance after interest is added
    const newBalance = balance + interestAmount;
    //update useState for Balance
    setBalance(newBalance);
    //update transaction history
    setTransactions([...transactions, { type: "Interest", amount: interestAmount, newBalance }]);
  }

  return (
    <button onClick={handleAddInterest} className="btn btn-success">
      Add Interest
    </button>
  );
}

export default AddInterest;
