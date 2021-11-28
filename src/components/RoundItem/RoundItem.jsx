import {RoundDate, RoundLink, RoundDateDay} from './styles';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';

const RoundItem = ({round, season}) => {
  const navigate = useNavigate();
  const date = dayjs(round.date);
  const location = round.Circuit.Location;

  const roundClickHandler = (event) => {
    event.preventDefault();
    navigate(`/seasons/${season}/${round.round}`, {
      state: {round: round.round, season},
      replace: true
    });
  };

  return (
    <li>
      <RoundLink onClick={roundClickHandler}>
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

export default RoundItem;
