import {RoundDate, RoundDateDay} from './styles';
import dayjs from 'dayjs';

const RoundItemDate = (props) => {
  const date = dayjs(props.date);

  return (
    <RoundDate>
      <RoundDateDay>{`${date.format('DD')}`}</RoundDateDay>
      <span>{`${date.format('MMM')}`}</span>
    </RoundDate>
  )
}

export default RoundItemDate;
