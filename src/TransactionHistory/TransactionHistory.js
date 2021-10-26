import React from "react";
import "./TransactionHistory.css";

function TransactionHistory({ items }) {
  return (
    <table className="tr__container">
      <thead className="tr__head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr className={index % 2 === 1 && "tr__active"} key={id}>
            <td className="tr__item">{type}</td>
            <td className="tr__item">{amount}</td>
            <td className="tr__item">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
