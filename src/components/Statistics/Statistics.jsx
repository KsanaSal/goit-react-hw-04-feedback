import PropTypes from 'prop-types';
import { List, ListTitle } from './Statistics.styled';

export const Statistics = ({ state, total, positiveFeedback }) => {
  return (
    <List>
      <ListTitle>Good: {state.good}</ListTitle>
      <ListTitle>Neutral: {state.neutral}</ListTitle>
      <ListTitle>Bad: {state.bad}</ListTitle>
      <ListTitle>Total: {total}</ListTitle>
      <ListTitle>Positive feedback: {positiveFeedback}%</ListTitle>
    </List>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
