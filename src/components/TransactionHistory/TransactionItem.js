import React from 'react';
import T from 'prop-types';

function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.T = {
  id: T.string.isRequired,
  type: T.string.isRequired,
  amount: T.number.isRequired,
  currency: T.string.isRequired,
};

export default TransactionItem;
