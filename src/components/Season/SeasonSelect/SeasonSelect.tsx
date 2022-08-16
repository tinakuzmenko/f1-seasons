import { ChangeEvent, FC } from 'react';

import { TableSeasonInterface } from '../../../types/Season.interface';

import { SelectWrapper } from './styles';

interface SeasonSelectProps {
  selected: string;
  seasons: TableSeasonInterface[];
  onChange(value: string): void;
}

const SeasonSelect: FC<SeasonSelectProps> = ({
  selected,
  seasons,
  onChange,
}) => {
  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <SelectWrapper value={selected} onChange={selectChangeHandler}>
      {seasons.map(season => (
        <option key={season.season}>{season.season}</option>
      ))}
    </SelectWrapper>
  );
};

export default SeasonSelect;
