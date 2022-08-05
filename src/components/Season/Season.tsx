import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useRequest, { Response, TransformData } from '../../hooks/useRequest';
import { TableSeasonInterface } from '../../types/Season.interface';
import { BASE_URL, CURRENT_YEAR } from '../../utilities/constants';
import { getSeasonsLimit } from '../../utilities/helpers';
import CenteredContent from '../UI/CenteredContent/CenteredContent';
import Loader from '../UI/Loader/Loader';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import Rounds from './Rounds/Rounds';
import SeasonSelect from './SeasonSelect/SeasonSelect';

const Season: FC = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams();
  const [selectedSeason, setSelectedSeason] = useState(
    seasonId || CURRENT_YEAR.toString(),
  );
  const [seasons, setSeasons] = useState<TableSeasonInterface[]>([]);
  const { isLoading, error, sendRequest: getSeasons } = useRequest();

  useEffect(() => {
    const storeSeasons: TransformData = (response: Response): void => {
      if ('SeasonTable' in response.MRData) {
        const sortedSeasons: TableSeasonInterface[] = [
          ...response.MRData.SeasonTable.Seasons,
        ].sort((a, b) => parseInt(b.season, 10) - parseInt(a.season, 10));

        setSeasons(sortedSeasons);
      }
    };

    const endpoint = `${BASE_URL}/seasons.json?limit=${getSeasonsLimit()}`;

    getSeasons({ endpoint }, storeSeasons);
  }, [getSeasons]);

  useEffect(() => {
    seasonId && setSelectedSeason(seasonId);
  }, [seasonId]);

  const seasonSelectChangeHandler = (season: string) => {
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
