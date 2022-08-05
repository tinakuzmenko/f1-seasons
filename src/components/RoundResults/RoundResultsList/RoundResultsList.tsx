import { FC } from 'react';

import { ResultInterface } from '../../../types/Round.interface';
import Loader from '../../UI/Loader/Loader';

import ResultsHeader from './ResultsHeader/ResultsHeader';
import RoundResult from './RoundResult/RoundResult';

interface RoundResultsListProps {
  results: ResultInterface[];
  onFavoritesClick: (id: string) => void;
  favorites: string[];
}

const RoundResultsList: FC<RoundResultsListProps> = ({
  results,
  onFavoritesClick,
  favorites,
}) =>
  !results.length ? (
    <Loader />
  ) : (
    <>
      <ResultsHeader />
      {results.map(result => (
        <RoundResult
          key={result.position}
          result={result}
          isFavorite={favorites.includes(result.Driver.driverId)}
          onFavoritesClick={onFavoritesClick}
        />
      ))}
    </>
  );

export default RoundResultsList;
