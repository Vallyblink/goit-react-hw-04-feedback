import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackButtons}>
      {options.map(option => (
        <button  className={css.buttonNeutral} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
    options: PropTypes.array.isRequired,
  };

export default Feedback;
