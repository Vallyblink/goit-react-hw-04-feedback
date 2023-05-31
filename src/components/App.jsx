import React, {Component} from "react";
import css from './Feedback/Feedback.module.css'
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Section  from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
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
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedback = ['good', 'neutral', 'bad'];

    return (
      <div className={css.container}>

        <Section title="We need your Feedback!">
          <Feedback options={feedback} onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

