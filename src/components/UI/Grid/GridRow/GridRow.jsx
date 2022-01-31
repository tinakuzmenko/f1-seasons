import {GridRowWrapper} from './styles';

const GridRow = ({highlighted, onClick, type, children}) => {
  return <GridRowWrapper highlighted={highlighted} onClick={onClick} type={type}>{children}</GridRowWrapper>
}

export default GridRow;
