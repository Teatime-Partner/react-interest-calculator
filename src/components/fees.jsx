import React from "react";

//create bank fees  function button that takes setState from DisplayBalance(balance.jsx)as props
function BankFees({ balance, setBalance, transactions, setTransactions }) {
  //handle the onClick event to subtract fees from the balance
  function handleFees() {
    //create variable to calculate the fee amount based on the current balance in the account
    const feeAmount = balance * 0.05;
    //create variable to hold new balance after fees are taken away
    const newBalance = balance - feeAmount;
    //update useState for Balance
    setBalance(newBalance);
    //update transaction history
    setTransactions([...transactions, { type: "Bank Fee", amount: feeAmount, newBalance }]);
  }
  //create button that fires handleFees onClick
  return (
    <button onClick={handleFees} className="btn btn-danger">
      Apply Bank Fees
    </button>
  );
}

export default BankFees;
