import GridRow from '../../UI/Grid/GridRow/GridRow';
import FavoritesButton from '../../UI/FavoritesButton/FavoritesButton';
import {ButtonWrapper, Position, SecondaryContent} from './styles';

const RoundResult = ({result, isFavorite, onFavoritesClick}) => {
  const favoritesButtonClickHandler = () => {
    onFavoritesClick(result.Driver.driverId, !isFavorite);
  };

  return (
    <GridRow
      columns={'1fr 1fr 5fr 4fr 4fr 2fr 2fr 1fr'}
      highlighted={result.position <= 3}
    >
      <Position>{result.position}</Position>
      <SecondaryContent>{result.Driver.code}</SecondaryContent>
      <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
      <div>{result.Constructor.name}</div>
      <SecondaryContent>{result.Time ? result.Time.time : result.status}</SecondaryContent>
      <div>{result.points}</div>
      <div>{result.laps}</div>
      <ButtonWrapper>
        <FavoritesButton
          title="Add to favorites"
          onClick={favoritesButtonClickHandler}
          active={isFavorite}
        />
      </ButtonWrapper>
    </GridRow>
  )
}

export default RoundResult;
