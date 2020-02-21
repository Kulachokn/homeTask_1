import React from 'react';
import T from 'prop-types';
import styles from './Statistic.module.css';

function StatisticItem({ id, label, percentage }) {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.T = {
  stats: T.arrayOf(
    T.exact({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticItem;
