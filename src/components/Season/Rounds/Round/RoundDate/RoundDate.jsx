import dayjs from 'dayjs';

import { RoundDateWrapper, RoundDateDay } from './styles';

const RoundDate = props => {
  const date = dayjs(props.date);

  return (
    <RoundDateWrapper>
      <RoundDateDay>{`${date.format('DD')}`}</RoundDateDay>
      <span>{`${date.format('MMM')}`}</span>
    </RoundDateWrapper>
  );
};

export default RoundDate;
