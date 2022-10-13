import { Container, Button } from './FeedbackButtons.styled';

export const FeedbackButton = ({ changeState }) => (
  <Container>
    <Button type="button" onClick={() => changeState('good')}>
      Good
    </Button>
    <Button type="button" onClick={() => changeState('neutral')}>
      Neutral
    </Button>
    <Button type="button" onClick={() => changeState('bad')}>
      Bad
    </Button>
  </Container>
);
