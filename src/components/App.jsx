import { useState } from 'react';
import { FeedbackButton } from './FeedbackButtons/FeedbackButtons';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeState = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good * 100) / total);
  };

  const options = ['good', 'neutral', 'bad'];

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
        <FeedbackButton changeState={changeState} options={options} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage(
              countTotalFeedback()
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   changeState = type => {
//     this.setState(prevState => {
//       return { [type]: prevState[type] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return Math.round((this.state.good * 100) / total);
//   };

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           paddingLeft: 30,
//           fontSize: 30,
//           fontWeight: 400,
//           color: '#010101',
//         }}
//       >
//         <Section title="Please leave feetback">
//           <FeedbackButton
//             changeState={this.changeState}
//             options={Object.keys(this.state)}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               state={this.state}
//               total={this.countTotalFeedback()}
//               positiveFeedback={this.countPositiveFeedbackPercentage(
//                 this.countTotalFeedback()
//               )}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
