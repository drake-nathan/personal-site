import styled from '@emotion/styled';

type StyledProjectTextDivProps = { isOddIndex?: boolean };

export const StyledProjectTextDiv = styled.div<StyledProjectTextDivProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOddIndex ? 'flex-start' : 'flex-end')};
`;

export const StyledProjectTitle = styled.h4`
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--color-text);
`;

export const StyledProjectLink = styled.a`
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--color-text);
  text-decoration: none;
  :hover {
    color: var(--color-primary);
  }
`;

export const StyledProjectDescription = styled.p`
  max-width: 95%;
  text-align: right;
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  height: auto;
  /* cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in; */
`;
