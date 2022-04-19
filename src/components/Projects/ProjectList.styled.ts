import styled from '@emotion/styled';

export const StyledProjectsContainer = styled.div`
  width: 80vw;
  margin-left: 10vw;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledProjectHr = styled.hr`
  width: 70vw;
  margin-bottom: 1.5em;
  height: 1px;
  border: none;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(transparent),
    to(transparent),
    color-stop(50%, var(--color-text))
  );
`;
