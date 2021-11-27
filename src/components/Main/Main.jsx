import Container from '../UI/Container/Container';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import RoundsList from '../RoundsList/RoundsList';
import {useEffect, useState} from 'react';
import {getSeasons} from '../../api/getSeasons';
import {MainWrapper} from './styles';

const Main = () => {
  const [selectedSeason, setSelectedSeason] = useState('2021');
  const [seasons, setSeasons] = useState();

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
  }

  return (
    <MainWrapper>
      <Container>
        {seasons
          ? <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={seasons}/>
          : <p>Loading...</p>
        }
        <RoundsList season={selectedSeason}/>
      </Container>
    </MainWrapper>
  );
};

export default Main;
