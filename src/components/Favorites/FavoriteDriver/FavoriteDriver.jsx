import { useEffect, useState } from 'react';

import { getDriver } from '../../../api/getDriver';
import { getFormattedDate } from '../../../utilities/helpers';
import GridRow from '../../UI/Grid/GridRow/GridRow';
import {
  CenteredContent,
  GridTooltip,
  PrimaryContent,
  SecondaryContent,
} from '../../UI/Grid/GridRow/styles';
import IconButton from '../../UI/IconButton/IconButton';

const FavoriteDriver = ({ driver, onRemove }) => {
  const [driverData, setDriverData] = useState({});

  useEffect(() => {
    getDriver(driver).then(response => setDriverData(response));
  }, []);

  if (!Object.keys(driverData).length) return <GridRow>Loading...</GridRow>;

  const removeClickHandler = () => {
    onRemove(driver);
  };

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
