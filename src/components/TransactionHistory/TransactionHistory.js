import React from "react";
import PropTypes from 'prop-types';
import styles from "../TransactionHistory/TransactionHistory.module.css";

function TransactionHistory({items}) {
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
                <tr key={item.id}>
                    <td className={styles.type}>{item.type}</td>
                    <td>{item.amount}</td>
                    <td className={styles.currency}>{item.currency}</td>
                </tr>))}
            </tbody>
        </table>

    );
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }))
};

export default TransactionHistory;