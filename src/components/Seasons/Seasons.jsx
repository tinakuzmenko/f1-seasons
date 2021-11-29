import {useEffect, useState} from 'react';
import {getSeasons} from '../../api/getSeasons';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import RoundsList from '../RoundsList/RoundsList';
import {useNavigate, useParams} from 'react-router-dom';
import Loader from '../UI/Loader/Loader';

const Seasons = () => {
  const navigate = useNavigate();
  const {seasonId} = useParams();
  const [selectedSeason, setSelectedSeason] = useState(seasonId || '2021');
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
    navigate(`/seasons/${season}`, {replace: true});
  }

  return seasons.length
    ? <>
      <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={seasons}/>
      <RoundsList season={selectedSeason}/>
    </>
    : <Loader/>
}

export default Seasons;
