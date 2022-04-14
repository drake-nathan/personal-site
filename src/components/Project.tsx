import styled from '@emotion/styled';

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5em;
`;

const ProjectDescription = styled.p`
  max-width: 60ch;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1em;
`;

interface Props {
  project: {
    title: string;
    image?: string;
    description: string[];
  };
}

const Project = ({ project }: Props) => (
  <>
    <ProjectTitle>{project.title}</ProjectTitle>
    {project.description.map((line) => (
      <ProjectDescription>{line}</ProjectDescription>
    ))}
    {project.image ? <ProjectImage src={project.image} /> : null}
  </>
);

export default Project;
