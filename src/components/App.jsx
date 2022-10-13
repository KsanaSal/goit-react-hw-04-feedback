import { Component } from 'react';
import { FeedbackButton } from './FeedbackButtons/FeedbackButtons';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = type => {
    console.log(type);
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
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.state.good}</li>
            <li>Positive feedback: {this.state.good}</li>
          </ul>
        </div>
      </div>
    );
  }
}
