import { GridHeaderWrapper } from './styles';

const GridHeader = ({ item, children }) => (
  <GridHeaderWrapper item={item}>{children}</GridHeaderWrapper>
);

export default GridHeader;
