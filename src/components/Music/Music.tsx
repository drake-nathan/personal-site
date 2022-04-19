import { musicDescription } from '../../content/music-content';
import { StyledPageTitle } from '../GlobalStyles';
import { StyledMusicContainer, StyledMusicText } from './Music.styled';

const Music = () => (
  <StyledMusicContainer>
    <StyledPageTitle>Music</StyledPageTitle>
    {musicDescription.map((p, i) => (
      <StyledMusicText key={i}>{p}</StyledMusicText>
    ))}
  </StyledMusicContainer>
);

export default Music;
