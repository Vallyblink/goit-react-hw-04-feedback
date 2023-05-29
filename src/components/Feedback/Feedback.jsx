import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onGoodClick = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutralClick = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBadClick = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const sum = this.countTotalFeedback();

    return (
      <div className={css.container}>
          <h1 className={css.containerTitle}>We need your Feedback!</h1>

        <div className={css.feedbackButtons}>
          <button className={css.buttonGood} onClick={this.onGoodClick}>Good!</button>
          <button className={css.buttonNeutral} onClick={this.onNeutralClick}>Neutral</button>
          <button className={css.buttonBad} onClick={this.onBadClick}>Bad.</button>
        </div>

        <div className={css.statistics}> 
          <h2 className={css.statisticsTitle}>Statistics</h2>
          
          <div className={css.statisticsValue}> 
          <p>Good = {this.state.good}</p>
          <p>Neutral = {this.state.neutral}</p>
          <p>Bad = {this.state.bad}</p>
          </div>
         
          <div className={css.analitics}> 
          <p>Total = {sum}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;