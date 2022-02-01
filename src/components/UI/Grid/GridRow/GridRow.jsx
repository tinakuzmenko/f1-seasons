import { GridRowWrapper } from './styles';

const GridRow = ({ highlighted, onClick, type, children }) => (
  <GridRowWrapper highlighted={highlighted} onClick={onClick} type={type}>
    {children}
  </GridRowWrapper>
);

export default GridRow;
