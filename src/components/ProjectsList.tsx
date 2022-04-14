import styled from '@emotion/styled';
import Project from './Project';
import { SubTitle } from './Header';
import { projects } from '../data/project-data';

const ProjectsContainer = styled.div`
  margin-left: 20%;
  width: 60%;
  h3 {
    font-weight: 500;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <SubTitle>Projects</SubTitle>
    {projects.map((project, i) => (
      <Project key={i} project={project} />
    ))}
  </ProjectsContainer>
);

export default Projects;
