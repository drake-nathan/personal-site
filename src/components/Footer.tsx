import styled from '@emotion/styled';

const FooterContainer = styled.div`
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  padding-top: 50px;
  background-color: white;

  hr {
    width: 80%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <hr />
  </FooterContainer>
);

export default Footer;
