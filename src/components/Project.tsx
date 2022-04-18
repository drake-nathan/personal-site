import {
  StyledProjectTextDiv,
  StyledProjectDescription,
  StyledProjectImage,
  StyledProjectLink,
  StyledProjectTitle,
} from '../styles/Project.styled';

interface Props {
  title: string;
  link?: string;
  image?: string;
  description: string[];
  index: number;
}

const Project = ({ title, link, image, description, index }: Props) => {
  const isOddIndex = index % 2 === 1;
  return (
    <>
      {isOddIndex && image && <StyledProjectImage src={image} />}
      <StyledProjectTextDiv
        style={{ alignItems: isOddIndex ? 'flex-start' : 'flex-end' }}
      >
        {link ? (
          <StyledProjectLink
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}
          </StyledProjectLink>
        ) : (
          <StyledProjectTitle>{title}</StyledProjectTitle>
        )}
        {description.map((line, i) => (
          <StyledProjectDescription key={i}>{line}</StyledProjectDescription>
        ))}
      </StyledProjectTextDiv>
      {!isOddIndex && image && <StyledProjectImage src={image} />}
    </>
  );
};

export default Project;
