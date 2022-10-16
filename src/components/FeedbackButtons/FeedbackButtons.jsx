import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackButtons.styled';

export const FeedbackButton = ({ changeState, options }) => (
  <Container>
    {options.map(option => {
      return (
        <Button key={option} type="button" onClick={() => changeState(option)}>
          {option}
        </Button>
      );
    })}
  </Container>
);

FeedbackButton.propTypes = { changeState: PropTypes.func.isRequired };
