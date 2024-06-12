import React from "react";

// Create a function that accepts transactions from the balance component and displays them as a list
function TransactionHistory({ transactions }) {
  return (
    <div className="history">
      <h3>Transaction History</h3>
      <ul>
        {/* map the array of transactions each time the setState in the DisplayBalance parent component is updated */}
        {transactions.map((prop, index) => (
          <li key={index}>
            {/* iterate through entries and display the values based on type of transaction */}
            {prop.type}: £{prop.amount.toFixed(2)} (Balance: £{prop.newBalance.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
