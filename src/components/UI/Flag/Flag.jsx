import {FlagImage} from './styles';

const Flag = ({country, size}) => {
  return (
    <FlagImage
      src={require(`../../../images/flags/${country.toLowerCase().replace(' ', '-')}.svg`).default || ''}
      alt={country}
      width={size}
      height={size}
    />
  )
}

export default Flag;
