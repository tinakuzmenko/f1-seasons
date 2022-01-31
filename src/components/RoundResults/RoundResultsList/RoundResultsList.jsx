import ResultsHeader from './ResultsHeader/ResultsHeader';
import RoundResult from './RoundResult/RoundResult';
import Loader from '../../UI/Loader/Loader';

const RoundResultsList = ({results, onFavoritesClick, favorites}) => {
  return (
    !results.length
      ? <Loader/>
      : <>
        <ResultsHeader/>
        {results.map((result) => {
          return (
            <RoundResult
              key={result.position}
              result={result}
              isFavorite={favorites.includes(result.Driver.driverId)}
              onFavoritesClick={onFavoritesClick}
            />
          )
        })}
      </>
  )
}

export default RoundResultsList;
