import CardDetailed from '../CardDetailed';
import { Container } from './styles';

function Weather({ data }) {
  return (
    <Container>
      <CardDetailed info={data} />
    </Container>
  );
}

export default Weather;
