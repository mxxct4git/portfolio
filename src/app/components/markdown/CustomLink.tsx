interface LinkProps {
  href?: string;
  children?: React.ReactNode;
}

const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
  const isExternal = href?.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      {children}
      {isExternal && <span className="ml-1">↗</span>}
    </a>
  );
};
export default CustomLink;
