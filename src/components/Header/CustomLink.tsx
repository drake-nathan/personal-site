import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ borderBottom: match ? 'solid' : 'none' }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
