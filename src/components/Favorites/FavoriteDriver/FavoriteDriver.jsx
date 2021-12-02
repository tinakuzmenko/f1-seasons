import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {CenteredContent, PrimaryContent, SecondaryContent} from '../../UI/Grid/GridRow/styles';
import {getDriver} from '../../../api/getDriver';
import GridRow from '../../UI/Grid/GridRow/GridRow';
import IconButton from '../../UI/IconButton/IconButton';

const FavoriteDriver = ({driver, onRemove}) => {
  const [driverData, setDriverData] = useState({});

  useEffect(() => {
    getDriver(driver).then((response) => setDriverData(response));
  }, []);

  if (!Object.keys(driverData).length) return <GridRow>Loading...</GridRow>;

  const removeClickHandler = () => {
    onRemove(driver);
  };

  return (
    <GridRow columns={"1fr 3fr 3fr 3fr 1fr 1fr"}>
      <SecondaryContent>{driverData.code}</SecondaryContent>
      <PrimaryContent>{`${driverData.givenName} ${driverData.familyName}`}</PrimaryContent>
      <div>{dayjs(driverData.dateOfBirth).format("DD MMM YYYY")}</div>
      <div>{driverData.nationality}</div>
      <div>{driverData.permanentNumber}</div>
      <CenteredContent>
        <IconButton type={'remove'} title={'Remove from favorites'} onClick={removeClickHandler}/>
      </CenteredContent>
    </GridRow>
  )
}

export default FavoriteDriver;
