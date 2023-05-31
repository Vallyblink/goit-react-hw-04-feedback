import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
        <div className={css.statisticsValue}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
     
      <p className={css.analitics}>Positive feedback: {positivePercentage}%</p>
      <p className={css.analitics}>Total: {total}</p>
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,}

export default Statistics;