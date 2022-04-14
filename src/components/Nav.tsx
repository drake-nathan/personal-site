import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 400;

  .link {
    margin: auto 20px;
  }

  hr {
    width: 80%;
    margin-top: 36px;
  }
`;

const Nav = () => (
  <NavContainer>
    <Link className="link" to="/">
      About
    </Link>
    <Link className="link" to="/projects">
      Projects
    </Link>
    <Link className="link" to="/hobbies">
      Hobbies
    </Link>
    <Link className="link" to="/music">
      Music
    </Link>
    <hr />
  </NavContainer>
);

export default Nav;
