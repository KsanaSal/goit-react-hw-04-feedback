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
    if (type === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (type === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (type === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = stateTotal => {
    return stateTotal.bad + stateTotal.good + stateTotal.neutral;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100) / total);
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
          <FeedbackButton changeState={this.changeState} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback(this.state)}
              positiveFeedback={this.countPositiveFeedbackPercentage(
                this.state.good,
                this.countTotalFeedback(this.state)
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
