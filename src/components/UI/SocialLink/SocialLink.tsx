import { FC } from 'react';

interface SocialLinkProps {
  link: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const SocialLink: FC<SocialLinkProps> = ({
  link,
  src,
  alt,
  width = 30,
  height = 30,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} width={width} height={height} />
  </a>
);

export default SocialLink;
