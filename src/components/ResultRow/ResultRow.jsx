import GridRow from '../UI/Grid/GridRow/GridRow';

const ResultRow = ({result}) => {
  console.log(result);

  return (
    <GridRow
      columns={'3% 3% 3% 3fr 3fr 2fr auto auto'}
      highlighted={result.position <= 3}
    >
      <div>{result.position}</div>
      <div>{result.number}</div>
      <div>{result.Driver.code}</div>
      <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
      <div>{result.Constructor.name}</div>
      <div>{result.Time ? result.Time.time : result.status}</div>
      <div>{result.points}</div>
      <button>Add to favorites</button>
    </GridRow>
  )
}

export default ResultRow;
