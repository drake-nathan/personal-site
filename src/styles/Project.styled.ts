import styled from '@emotion/styled';

export const StyledProjectTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  font-size: 1.25rem;
  max-width: 95%;
  color: var(--color-text);
  text-align: right;
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  height: auto;
  /* cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in; */
`;
