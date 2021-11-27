import {useEffect, useState} from 'react';
import {getSeasons} from '../../api/getSeasons';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import RoundsList from '../RoundsList/RoundsList';

const Seasons = () => {
  const [selectedSeason, setSelectedSeason] = useState('2021');
  const [seasons, setSeasons] = useState();

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
  }

  return (
    <>
      {seasons
        ? <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={seasons}/>
        : <p>Loading...</p>
      }
      <RoundsList season={selectedSeason}/>
    </>
  );
};

export default Seasons;
