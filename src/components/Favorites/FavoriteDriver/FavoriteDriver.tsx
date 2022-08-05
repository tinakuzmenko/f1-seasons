import { FC, useEffect, useState } from 'react';

import useRequest, { Response, TransformData } from '../../../hooks/useRequest';
import { DriverInterface } from '../../../types/Driver.interface';
import { BASE_URL } from '../../../utilities/constants';
import { getFormattedDate } from '../../../utilities/helpers';
import CenteredContent from '../../UI/CenteredContent/CenteredContent';
import GridRow from '../../UI/Grid/GridRow/GridRow';
import {
  GridTooltip,
  PrimaryContent,
  SecondaryContent,
} from '../../UI/Grid/GridRow/styles';
import IconButton from '../../UI/IconButton/IconButton';

interface FavoriteDriverProps {
  driver: string;
  onRemove: (id: string) => void;
}

const FavoriteDriver: FC<FavoriteDriverProps> = ({ driver, onRemove }) => {
  const [driverData, setDriverData] = useState<DriverInterface | null>(null);
  const { isLoading, error, sendRequest: getDriver } = useRequest();

  useEffect(() => {
    const storeFavoriteDriver: TransformData = (response: Response) => {
      if ('DriverTable' in response.MRData) {
        setDriverData(response.MRData.DriverTable.Drivers[0]);
      }
    };

    const endpoint = `${BASE_URL}/drivers/${driver}.json`;

    getDriver({ endpoint }, storeFavoriteDriver);
  }, [getDriver]);

  if (isLoading) return <GridRow>Loading..</GridRow>;
  if (error) return <GridRow>{error}</GridRow>;

  const removeClickHandler = () => {
    onRemove(driver);
  };

  if (!driverData) return null;

  return (
    <GridRow type="favorites">
      <PrimaryContent>
        {`${driverData.givenName} ${driverData.familyName}`}
      </PrimaryContent>
      <SecondaryContent>
        <GridTooltip>Code:</GridTooltip>
        {driverData.code}
      </SecondaryContent>
      <div>
        <GridTooltip>Date of birth:</GridTooltip>
        {getFormattedDate(driverData.dateOfBirth, 'DD MMM YYYY')}
      </div>
      <div>
        <GridTooltip>Nationality:</GridTooltip>
        {driverData.nationality}
      </div>
      <div>
        <GridTooltip>Permanent number:</GridTooltip>
        {driverData.permanentNumber}
      </div>
      <CenteredContent>
        <IconButton
          type="remove"
          title="Remove from favorites"
          onClick={removeClickHandler}
        />
      </CenteredContent>
    </GridRow>
  );
};

export default FavoriteDriver;
