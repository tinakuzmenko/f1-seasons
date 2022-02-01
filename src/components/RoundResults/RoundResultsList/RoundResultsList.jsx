import Loader from '../../UI/Loader/Loader';

import ResultsHeader from './ResultsHeader/ResultsHeader';
import RoundResult from './RoundResult/RoundResult';

const RoundResultsList = ({ results, onFavoritesClick, favorites }) =>
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
