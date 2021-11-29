import {RowWrapper} from './styles';

const ResultRow = ({result}) => {
  console.log(result);

  return (
    <RowWrapper position={result.position}>
      <div>{result.position}</div>
      <div>{result.number}</div>
      <div>{result.Driver.code}</div>
      <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
      <div>{result.Constructor.name}</div>
      <div>{result.status}</div>
      <div>{result.Time ? result.Time.time : '-'}</div>
      <div>{result.points}</div>
      <button>Add to favorites</button>
    </RowWrapper>
  )
}

export default ResultRow;
