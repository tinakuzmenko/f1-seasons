import {RoundDate, RoundLink, RoundDateDay} from './styles';
import dayjs from 'dayjs';

const Round = ({round}) => {
  const date = dayjs(round.date);
  const location = round.Circuit.Location;

  return (
    <li>
      <RoundLink href="">
        <div>
          <RoundDate>
            <RoundDateDay>{`${date.format('DD')}`}</RoundDateDay>
            <span>{`${date.format('MMM')}`}</span>
          </RoundDate>
        </div>
        <div>{round.raceName}</div>
        <div>{`${location.locality}, ${location.country}`}</div>
      </RoundLink>
    </li>
  );
};

export default Round;
