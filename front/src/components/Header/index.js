import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { AuthContext } from '../../context/AuthContext';

import {
  Container,
  Logo,
  ButtonsContainer,
} from './styles';

function Header() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <Link to='/'>
        <Logo src="/images/logo.png" />
        <span>Weather Now</span>
      </Link>
      <ButtonsContainer>
        {/* <Link to="/config">
          <FaCogs size={20} color="var(--primary-color)" />
        </Link> */}
        <button onClick={handleLogout}>
          <FaSignOutAlt size={20} color="var(--error-color)" />
          Logout
        </button>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
