import dayjs from 'dayjs';
import { FC } from 'react';

import { RoundDateWrapper, RoundDateDay } from './styles';

interface RoundDateProps {
  date: string;
}

const RoundDate: FC<RoundDateProps> = ({ date }) => {
  const parsedDate = dayjs(date);

  return (
    <RoundDateWrapper>
      <RoundDateDay>{`${parsedDate.format('DD')}`}</RoundDateDay>
      <span>{`${parsedDate.format('MMM')}`}</span>
    </RoundDateWrapper>
  );
};

export default RoundDate;
