// Import components and user states
import React from "react";
import DepositInput from "./deposit";
import WithdrawInput from "./withdraw";
import TransactionHistory from "./transactionHistory";
import AddInterest from "./addInterest";
import BankFees from "./fees";
import "./balance.css";
import { useState } from "react";

// create a Display Balance function that takes two compnents as child compnents for useState
function DisplayBalance() {
  //Set initial balance as 0
  const [balance, setBalance] = useState(0);
  //Set deposit variable to be taken from useState children components
  const [deposit, setDeposit] = useState("");
  //Set withdraw variable to be taken from useState children compnents
  const [withdraw, setWithdraw] = useState("");
  //set transaction history array to be updated
  const [transactions, setTransactions] = useState([]);

  //handleEvent function, called back in DepositInput as a prop
  function handleDepositChange(deposit) {
    //set state
    setDeposit(deposit);
  }

  //Function to trigger onClick to push deposit value into the balance and ensure the input is valid
  function handleDepositSubmit() {
    //take set useState deposit as value
    const depositAmount = parseFloat(deposit);
    //check if depositAmount is a valid input
    if (!isNaN(depositAmount) && depositAmount > 0) {
      //create a variable to hold new balance after deposit is added
      const newBalance = balance + depositAmount;
      //set new balance as useState
      setBalance(newBalance);
      //create an entry on transaction history using the type of transaciton (deposit), deposit amount and the new balance after the deposit
      setTransactions([...transactions, { type: "Deposit", amount: depositAmount, newBalance }]);
      //clear deposit useState to blank
      setDeposit("");
    } else {
      //alert if input is invalid eg. letters, specials or 0
      alert("Please enter a valid deposit amount");
    }
  }
  //handleEvent function, called back in WithdrawInput as a prop
  function handleWithdrawChange(withdraw) {
    //set state
    setWithdraw(withdraw);
  }

  //Function to trigger onClick to push withdraw value into the balance and ensure the input is valid
  function handleWithdrawSubmit() {
    //take set useState withdraw as value
    const withdrawAmount = parseFloat(withdraw);
    //check if depositAmount is a valid input
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      //check if withdraw amount is less than or equal to the available balance
      if (withdrawAmount <= balance) {
        //create a variable to hold new balance after deposit is added
        const newBalance = balance - withdrawAmount;
        //set new balance as useState
        setBalance(newBalance);
        //create an entry on transaction history using the type of transaciton (withdraw money), withdraw amount and the new balance after the withdraw
        setTransactions([
          ...transactions,
          { type: "Withdrawal", amount: withdrawAmount, newBalance },
        ]);
        //clear withdraw useState to blank
        setWithdraw("");
      } else {
        //alert if you can't withdraw due to lack of money
        alert("Insufficient balance");
      }
    } else {
      //alert if input is invalid eg. letters, specials or 0
      alert("Please enter a valid withdrawal amount");
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">Your bank account</h1>
        <div className="balance text-center">
          {/* ensure the balance is a float with max of 2 decimal places */}
          <h2>Current Balance: £{balance.toFixed(2)}</h2>
        </div>
        <div className="row mb-3">
          {/* import children component for deposit */}
          <DepositInput deposit={deposit} handleChange={handleDepositChange} />
          <button className="col-3 btn" onClick={handleDepositSubmit}>
            Deposit
          </button>
        </div>
        <div className="row mb-3">
          {/* Import children component for withdraw */}
          <WithdrawInput withdraw={withdraw} handleChange={handleWithdrawChange} />
          <button className="col-3 btn" onClick={handleWithdrawSubmit}>
            Withdraw
          </button>
        </div>
        {/* create a div fro all extra charges - interes and fees */}
        <div className="extras">
          <span>
            {" "}
            <p>Current interest rate: 2.00%</p>
            {/* import AddInterest component that takes balance and transactions as props*/}
            <AddInterest
              balance={balance}
              setBalance={setBalance}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </span>
          <span>
            <p>Current bank fees: 5.00%</p>
            {/* import BankFees component that takes balance and transactions as props */}
            <BankFees
              balance={balance}
              setBalance={setBalance}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </span>
        </div>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
}
export default DisplayBalance;
