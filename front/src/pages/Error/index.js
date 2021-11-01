import { IoIosThunderstorm } from 'react-icons/io';

import Header from '../../components/Header';
import { Container } from './styles';

function Error() {
  return (
    <Container>
      <Header />
      <span>PAGE NOT FOUND 404</span>
      <IoIosThunderstorm size={200} color="var(--primary-color)" />
    </Container>
  );
}

export default Error;
