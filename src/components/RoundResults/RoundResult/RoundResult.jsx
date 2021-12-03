import GridRow from '../../UI/Grid/GridRow/GridRow';
import {CenteredContent, GridTooltip, PrimaryContent, SecondaryContent} from '../../UI/Grid/GridRow/styles';
import IconButton from '../../UI/IconButton/IconButton';

const RoundResult = ({result, isFavorite, onFavoritesClick}) => {
  const favoritesButtonClickHandler = () => {
    onFavoritesClick(result.Driver.driverId, !isFavorite);
  };

  return (
    <GridRow
      type={'result'}
      highlighted={result.position <= 3}
    >
      <PrimaryContent>
        <GridTooltip>#</GridTooltip>
        {result.position}
      </PrimaryContent>
      <SecondaryContent>
        <GridTooltip>Code:</GridTooltip>
        {result.Driver.code}
      </SecondaryContent>
      <div>
        <GridTooltip>Driver:</GridTooltip>
        {`${result.Driver.givenName} ${result.Driver.familyName}`}
      </div>
      <div>
        <GridTooltip>Team:</GridTooltip>
        {result.Constructor.name}
      </div>
      <SecondaryContent>
        <GridTooltip>Time:</GridTooltip>
        {result.Time ? result.Time.time : result.status}
      </SecondaryContent>
      <div>
        <GridTooltip>Points:</GridTooltip>
        {result.points}
      </div>
      <div>
        <GridTooltip>Laps:</GridTooltip>
        {result.laps}
      </div>
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
