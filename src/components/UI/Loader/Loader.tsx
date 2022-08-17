import { FC } from 'react';

import img from '../../../images/loader.svg';

import { LoaderImageWrapper } from './styles';

interface LoaderProps {
  width?: number;
  height?: number;
}

const Loader: FC<LoaderProps> = ({ width = 50, height = 50 }) => (
  <LoaderImageWrapper
    src={img}
    width={width}
    height={height}
    alt="Loading..."
  />
);

export default Loader;
