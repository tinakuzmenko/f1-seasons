import Container from '../UI/Container/Container';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import RoundsList from '../RoundsList/RoundsList';
import {useState} from 'react';

const Main = (props) => {
  const [selectedSeason, setSelectedSeason] = useState('2021');

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
  }

  return (
    <main>
      <Container>
        {props.seasons
          ? <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={props.seasons}/>
          : <p>Loading...</p>
        }
        <RoundsList season={selectedSeason}/>
      </Container>
    </main>
  );
};

export default Main;
