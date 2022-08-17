import { FC } from 'react';

import GridHeader from '../../UI/Grid/GridHeader/GridHeader';

const FavoritesHeader: FC = () => (
  <GridHeader item="favorites">
    <div title="Driver's name">Driver</div>
    <div title="Driver's code">Code</div>
    <div title="Driver's date of birth">Date of birth</div>
    <div title="Driver's nationality">Nationality</div>
    <div title="Driver's permanent number">Perm. #</div>
    <div title="Remove from favorites" />
  </GridHeader>
);

export default FavoritesHeader;
