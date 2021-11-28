import {useEffect, useState} from 'react';
import {getSeasons} from '../../api/getSeasons';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import RoundsList from '../RoundsList/RoundsList';
import {useNavigate} from 'react-router-dom';

const Seasons = () => {
  const [selectedSeason, setSelectedSeason] = useState('2021');
  const [seasons, setSeasons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
    navigate(`/seasons/${season}`, {state: {season}, replace: true});
  }

  return seasons.length
    ? <>
      <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={seasons}/>
      <RoundsList season={selectedSeason}/>
    </>
    : <p>Loading...</p>
}

export default Seasons;
