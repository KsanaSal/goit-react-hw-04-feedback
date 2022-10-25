import PropTypes from 'prop-types';
import { List, ListTitle } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <List>
      <ListTitle>Good: {good}</ListTitle>
      <ListTitle>Neutral: {neutral}</ListTitle>
      <ListTitle>Bad: {bad}</ListTitle>
      <ListTitle>Total: {total}</ListTitle>
      <ListTitle>Positive feedback: {positiveFeedback}%</ListTitle>
    </List>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
