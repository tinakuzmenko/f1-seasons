import { FC } from 'react';

import { ResultInterface } from '../../../../types/Round.interface';
import CenteredContent from '../../../UI/CenteredContent/CenteredContent';
import GridRow from '../../../UI/Grid/GridRow/GridRow';
import {
  GridTooltip,
  PrimaryContent,
  SecondaryContent,
} from '../../../UI/Grid/GridRow/styles';
import IconButton from '../../../UI/IconButton/IconButton';

interface RoundResultProps {
  result: ResultInterface;
  isFavorite: boolean;
  onFavoritesClick: (id: string) => void;
}

const RoundResult: FC<RoundResultProps> = ({
  result,
  isFavorite,
  onFavoritesClick,
}) => {
  const favoritesButtonClickHandler = () => {
    onFavoritesClick(result.Driver.driverId);
  };

  const position = parseInt(result.position, 10);

  return (
    <GridRow type="result" highlighted={position <= 3}>
      <PrimaryContent>
        <GridTooltip>#</GridTooltip>
        {result.position}
      </PrimaryContent>
      <SecondaryContent>
        <GridTooltip>Code:</GridTooltip>
        {result.Driver.code || 'n/a'}
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
          type="favorites"
          onClick={favoritesButtonClickHandler}
          active={isFavorite}
        />
      </CenteredContent>
    </GridRow>
  );
};

export default RoundResult;
