import { Component } from 'react';
import { FeedbackButton } from './FeedbackButtons/FeedbackButtons';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: 30,
          fontSize: 30,
          fontWeight: 400,
          color: '#010101',
        }}
      >
        <Section title="Please leave feetback">
          <FeedbackButton
            changeState={this.changeState}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback()
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
