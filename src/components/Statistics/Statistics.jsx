import { List, ListTitle } from './Statistics.styled';

export const Statistics = ({ state }) => (
    <List>
      <ListTitle>Good: {state.good}</ListTitle>
      <ListTitle>Neutral: {state.neutral}</ListTitle>
      <ListTitle>Bad: {state.bad}</ListTitle>
      <ListTitle>Total: {state.total}</ListTitle>
      <ListTitle>Positive feedback: {state.positiveFeedback}%</ListTitle>
    </List>
);
