import React from "react";
import PropTypes from 'prop-types';

function Statistics({title, stats}) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(stat => <li key={stat.id}>
                    <span>{stat.label}</span><span>{stat.percentage}%</span></li>)}
            </ul>
        </section>
    );
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
};

export default Statistics;