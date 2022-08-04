import { FC } from 'react';

import { FlagImage } from './styles';

interface FlagProps {
  country: string;
  width: number;
  height: number;
}

const Flag: FC<FlagProps> = ({ country, width, height }) => {
  const filename = country.toLowerCase().replace(' ', '-');

  return (
    <FlagImage
      src={require(`../../../images/flags/${filename}.svg`).default || ''}
      alt={country}
      width={width}
      height={height}
    />
  );
};

export default Flag;
