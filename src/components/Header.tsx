import styled from '@emotion/styled';

const MainTitle = styled.h1`
  font-size: 4.75rem;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 0px;
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 20px;
`;

const Header = () => (
  <>
    <MainTitle>Nathan Drake</MainTitle>
    <SubTitle>Software Engineer</SubTitle>
  </>
);

export default Header;
