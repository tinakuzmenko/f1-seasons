import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getSeasons} from '../../api/getSeasons';
import SeasonSelect from './SeasonSelect/SeasonSelect';
import Rounds from './Rounds/Rounds';
import Loader from '../UI/Loader/Loader';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Season = () => {
  const currentYear = (new Date()).getFullYear();

  const navigate = useNavigate();
  const {seasonId} = useParams();
  const [selectedSeason, setSelectedSeason] = useState(seasonId || currentYear);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  useEffect(() => {
    seasonId && setSelectedSeason(seasonId);
  }, [seasonId])

  const seasonSelectChangeHandler = (season) => {
    setSelectedSeason(season);
    navigate(`/seasons/${season}`);
  };

  return !seasons.length
    ? <Loader/>
    : <>
      <SectionTitle>
        <h2>Selected season:</h2>
        <SeasonSelect onChange={seasonSelectChangeHandler} selected={selectedSeason} seasons={seasons}/>
      </SectionTitle>
      <Rounds season={selectedSeason}/>
    </>
}

export default Season;
