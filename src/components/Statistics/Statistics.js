import React from 'react';
import T from 'prop-types';
import StatisticItem from './StatisticItem';
import styles from './Statistic.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.T = {
  title: T.string,
};

export default Statistics;
