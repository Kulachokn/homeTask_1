import React from 'react';
import T from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propType = {
  items: T.arrayOf(
    T.exact({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.number.isRequired,
      currency: T.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
