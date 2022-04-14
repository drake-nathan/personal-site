import styled from '@emotion/styled';

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 20px;
`;

const ProjectDescription = styled.p``;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

interface Props {
  project: {
    title: string;
    image?: string;
    description: string;
  };
}

const Project = ({ project }: Props) => (
  <>
    <ProjectTitle>{project.title}</ProjectTitle>
    <ProjectDescription>{project.description}</ProjectDescription>
    {project.image ? <ProjectImage src={project.image} /> : null}
  </>
);

export default Project;
