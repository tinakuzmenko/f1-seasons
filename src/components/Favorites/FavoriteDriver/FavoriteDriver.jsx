import GridRow from '../../UI/Grid/GridRow/GridRow';
import {useEffect, useState} from 'react';
import {getDriver} from '../../../api/getDriver';
import FavoritesButton from '../../UI/FavoritesButton/FavoritesButton';
import dayjs from 'dayjs';

const FavoriteDriver = ({driver}) => {
  const [driverData, setDriverData] = useState({});

  useEffect(() => {
    getDriver(driver).then((response) => {
      console.log(response);
      setDriverData(response);
    });
  }, []);

  const removeClickHandler = () => {
    //
  };

  return (
    <GridRow columns={"1fr 2fr 2fr 1fr 1fr 1fr"}>
      <div>{driverData.code}</div>
      <div>{`${driverData.givenName} ${driverData.familyName}`}</div>
      <div>{dayjs(driverData.dateOfBirth).format("DD MMM YYYY")}</div>
      <div>{driverData.nationality}</div>
      <div>{driverData.permanentNumber}</div>
      <div><FavoritesButton active={true} title={'Remove from favorites'} onClick={removeClickHandler}/></div>
    </GridRow>
  )
}

export default FavoriteDriver;
