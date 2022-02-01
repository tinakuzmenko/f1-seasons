import { FlagImage } from './styles';

const Flag = ({ country, width, height }) => {
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
