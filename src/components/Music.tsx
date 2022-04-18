import { musicDescription } from '../content/music-content';
import { StyledPageTitle } from '../styles/GlobalStyles';
import { StyledMusicContainer, StyledMusicText } from '../styles/Music.styled';

const Music = () => (
  <StyledMusicContainer>
    <StyledPageTitle>Music</StyledPageTitle>
    {musicDescription.map((p, i) => (
      <StyledMusicText key={i}>{p}</StyledMusicText>
    ))}
  </StyledMusicContainer>
);

export default Music;
