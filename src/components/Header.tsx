import Nav from './Nav';
import {
  StyledHeaderContainer,
  StyledHeaderDiv,
  StyledImg,
  StyledMainTitle,
  StyledHr,
} from '../styles/Header.styled';

const Header = () => (
  <>
    <StyledHeaderContainer>
      <StyledHeaderDiv>
        <StyledImg src="images/headshot.jpeg" />
        <StyledMainTitle>Nathan Drake</StyledMainTitle>
      </StyledHeaderDiv>
      <Nav />
    </StyledHeaderContainer>
    <StyledHr />
  </>
);

export default Header;
