import { FC } from 'react';

import { LogoWrapper } from './styles';

interface LogoProps {
  src: string;
  width: number;
  height?: number;
  alt?: string;
  title?: string;
}

const Logo: FC<LogoProps> = ({
  src,
  width,
  height,
  alt = 'F1 Seasons App logo',
  title = 'F1 Seasons App',
}) => (
  <LogoWrapper
    src={src}
    width={width}
    height={height}
    alt={alt}
    title={title}
  />
);

export default Logo;
