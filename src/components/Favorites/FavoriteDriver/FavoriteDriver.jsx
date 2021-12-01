import GridRow from '../../UI/Grid/GridRow/GridRow';
import {useEffect, useState} from 'react';
import {getDriver} from '../../../api/getDriver';
import dayjs from 'dayjs';
import {ButtonWrapper, PrimaryContent, SecondaryContent} from './styles';
import IconButton from '../../UI/IconButton/IconButton';

const FavoriteDriver = ({driver}) => {
  const [driverData, setDriverData] = useState({});

  useEffect(() => {
    getDriver(driver).then((response) => setDriverData(response));
  }, []);

  const removeClickHandler = () => {
    //
  };

  if (!Object.keys(driverData).length) return <GridRow>Loading...</GridRow>

  return (
    <GridRow columns={"1fr 3fr 3fr 3fr 1fr 1fr"}>
      <SecondaryContent>{driverData.code}</SecondaryContent>
      <PrimaryContent>{`${driverData.givenName} ${driverData.familyName}`}</PrimaryContent>
      <div>{dayjs(driverData.dateOfBirth).format("DD MMM YYYY")}</div>
      <div>{driverData.nationality}</div>
      <div>{driverData.permanentNumber}</div>
      <ButtonWrapper>
        <IconButton type={'remove'} title={'Remove from favorites'} onClick={removeClickHandler}/>
      </ButtonWrapper>
    </GridRow>
  )
}

export default FavoriteDriver;
