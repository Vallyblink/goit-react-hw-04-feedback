import React, {useState} from "react";
import css from './Feedback/Feedback.module.css'
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Section  from './Section/Section';

export default function App () {
  const [feedbackCounts, setfeedbackCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  
  })
    console.log('hooooooooks')

   const handleFeedback = (type) => {
    setfeedbackCount((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbackCounts);
    const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum;
  };

 const  countPositiveFeedbackPercentage = () => {
    const { good } = feedbackCounts;
    const total = countTotalFeedback();
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };


    const { good, neutral, bad } = feedbackCounts;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    const feedback = ['good', 'neutral', 'bad'];

    return (
      <div className={css.container}>

        <Section title="We need your Feedback!">
          <Feedback options={feedback} onLeaveFeedback={handleFeedback} />
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


