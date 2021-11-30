import GridRow from '../../UI/Grid/GridRow/GridRow';
import FavoritesButton from '../../UI/FavoritesButton/FavoritesButton';
import {Code, Position, Time} from './styles';

const RoundResult = ({result}) => {
  console.log(result);

  const favoritesButtonClickHandler = () => {
    return;
  };

  return (
    <GridRow
      columns={'1fr 1fr 5fr 4fr 4fr 1fr 1fr 1fr'}
      highlighted={result.position <= 3}
    >
      <Position>{result.position}</Position>
      <Code>{result.Driver.code}</Code>
      <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
      <div>{result.Constructor.name}</div>
      <Time><span>{result.Time ? result.Time.time : result.status}</span></Time>
      <div>{result.points}</div>
      <div>{result.laps}</div>
      <FavoritesButton
        title="Add to favorites"
        onClick={favoritesButtonClickHandler}
        active={false}
      />
    </GridRow>
  )
}

export default RoundResult;
