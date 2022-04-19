import CustomLink from './CustomLink';
import { NavContainer } from './Nav.styled';

const Nav = () => (
  <NavContainer>
    <CustomLink className="link" to="/">
      01 Home
    </CustomLink>
    <CustomLink className="link" to="/projects">
      02 Projects
    </CustomLink>
    <CustomLink className="link" to="/interests">
      03 Interests
    </CustomLink>
    <CustomLink className="link" to="/music">
      04 Music
    </CustomLink>
  </NavContainer>
);

export default Nav;
