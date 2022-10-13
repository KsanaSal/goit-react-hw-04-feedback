import { Component } from 'react';
import { FeedbackButton } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  changeState = type => {
    console.log(type);
    if (type === 'good') {
      this.setState({ good: this.state.good + 1 });
      // this.countTotalFeedback(this.state)
    }
    if (type === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
      // this.countTotalFeedback(this.state)
    }
    if (type === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
    this.setState(prevState => {
      return { total: this.countTotalFeedback(prevState) };
    });
    this.setState(prevState => {
      return { positiveFeedback: this.countPositiveFeedbackPercentage(prevState) };
    });
  };

  countTotalFeedback = stateTotal => {
    return stateTotal.bad + stateTotal.good + stateTotal.neutral;
  };

  countPositiveFeedbackPercentage = StateFeedback => {
    return Math.round(StateFeedback.good * 100 / StateFeedback.total)
  }

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 30,
          fontSize: 40,
          fontWeight: 400,
          color: '#010101',
        }}
      >
        <h1>Please leave feetback</h1>
        <FeedbackButton changeState={this.changeState} />
        <Statistics state={this.state} />
      </div>
    );
  }
}
