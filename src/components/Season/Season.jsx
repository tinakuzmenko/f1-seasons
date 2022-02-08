import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import API from '../../api/API';
import useRequest from '../../hooks/useRequest';
import { CenteredContent } from '../UI/Grid/GridRow/styles';
import Loader from '../UI/Loader/Loader';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import Rounds from './Rounds/Rounds';
import SeasonSelect from './SeasonSelect/SeasonSelect';

const Season = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const { seasonId } = useParams();
  const [selectedSeason, setSelectedSeason] = useState(seasonId || currentYear);
  const [seasons, setSeasons] = useState([]);
  const { isLoading, error, sendRequest: getSeasons } = useRequest();

  useEffect(() => {
    const api = new API();

    const storeSeasons = response => {
      const sortedSeasons = [...response.MRData.SeasonTable.Seasons].sort(
        (a, b) => b.season - a.season,
      );

      setSeasons(sortedSeasons);
    };

    getSeasons({ url: api.seasons() }, storeSeasons);
  }, [getSeasons]);

  useEffect(() => {
    seasonId && setSelectedSeason(seasonId);
  }, [seasonId]);

  const seasonSelectChangeHandler = season => {
    setSelectedSeason(season);
    navigate(`/seasons/${season}`);
  };

  if (isLoading) return <Loader />;
  if (error) return <CenteredContent>{error}</CenteredContent>;

  return (
    <>
      <SectionTitle>
        <h2>Selected season:</h2>
        <SeasonSelect
          onChange={seasonSelectChangeHandler}
          selected={selectedSeason}
          seasons={seasons}
        />
      </SectionTitle>
      <Rounds season={selectedSeason} />
    </>
  );
};

export default Season;
