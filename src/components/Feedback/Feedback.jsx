import { Component } from 'react';

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
      <div>
          <h1>We need your Feedback</h1>

        <div>
          <button onClick={this.onGoodClick}>good</button>
          <button onClick={this.onNeutralClick}>neutral</button>
          <button onClick={this.onBadClick}>bad</button>
        </div>

        <div>
          <div>
            <h2>Statistics</h2>
          <p>good = {this.state.good}</p>
          <p>neutral = {this.state.neutral}</p>
          <p>bad = {this.state.bad}</p>
          </div>
          
          <p>all = {sum}</p>
          <p>Positive percentage: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;