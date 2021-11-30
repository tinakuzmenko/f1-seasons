import {RoundDateWrapper, RoundDateDay} from './styles';
import dayjs from 'dayjs';

const RoundDate = (props) => {
  const date = dayjs(props.date);

  return (
    <RoundDateWrapper>
      <RoundDateDay>{`${date.format('DD')}`}</RoundDateDay>
      <span>{`${date.format('MMM')}`}</span>
    </RoundDateWrapper>
  )
}

export default RoundDate;
