import GridRow from '../../UI/Grid/GridRow/GridRow';
import {CenteredContent, PrimaryContent, SecondaryContent} from '../../UI/Grid/GridRow/styles';
import IconButton from '../../UI/IconButton/IconButton';

const RoundResult = ({result, isFavorite, onFavoritesClick}) => {
  const favoritesButtonClickHandler = () => {
    onFavoritesClick(result.Driver.driverId, !isFavorite);
  };

  return (
    <GridRow
      columns={'1fr 1fr 5fr 4fr 4fr 2fr 2fr 1fr'}
      highlighted={result.position <= 3}
    >
      <PrimaryContent>{result.position}</PrimaryContent>
      <SecondaryContent>{result.Driver.code}</SecondaryContent>
      <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
      <div>{result.Constructor.name}</div>
      <SecondaryContent>{result.Time ? result.Time.time : result.status}</SecondaryContent>
      <div>{result.points}</div>
      <div>{result.laps}</div>
      <CenteredContent>
        <IconButton
          title="Add to favorites"
          type={isFavorite ? 'favoritesActive' : 'favorites'}
          onClick={favoritesButtonClickHandler}
          active={isFavorite}
        />
      </CenteredContent>
    </GridRow>
  )
}

export default RoundResult;
