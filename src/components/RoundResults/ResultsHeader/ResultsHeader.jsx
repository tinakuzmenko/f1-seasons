import GridRow from '../../UI/Grid/GridRow/GridRow';
import {ResultsHeaderContent} from './styles';

const ResultsHeader = () => {
  return (
    <GridRow
      columns={'1fr 1fr 5fr 4fr 4fr 1fr 1fr 1fr'}
    >
      <ResultsHeaderContent>#</ResultsHeaderContent>
      <ResultsHeaderContent>Code</ResultsHeaderContent>
      <ResultsHeaderContent>Driver</ResultsHeaderContent>
      <ResultsHeaderContent>Team</ResultsHeaderContent>
      <ResultsHeaderContent>Time</ResultsHeaderContent>
      <ResultsHeaderContent>Points</ResultsHeaderContent>
      <ResultsHeaderContent>Laps</ResultsHeaderContent>
      <div></div>
    </GridRow>
  )
}

export default ResultsHeader;
