import { Fragment } from 'react';
import Project from './Project';
import { projects } from '../content/project-content';

import { StyledPageTitle } from '../styles/GlobalStyles';
import {
  StyledProjectsContainer,
  StyledProjectHr,
} from '../styles/ProjectList.styled';

const Projects = () => (
  <>
    <StyledPageTitle>Projects</StyledPageTitle>
    <StyledProjectHr />
    <StyledProjectsContainer>
      {projects.map((project, i) => {
        const isLastProject = i === projects.length - 1;
        return (
          <Fragment key={i}>
            <Project index={i} {...project} />
            {!isLastProject && (
              <StyledProjectHr style={{ gridColumn: 'span 2' }} />
            )}
          </Fragment>
        );
      })}
    </StyledProjectsContainer>
  </>
);

export default Projects;
