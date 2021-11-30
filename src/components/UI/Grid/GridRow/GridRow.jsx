import {GridRowWrapper} from './styles';

const GridRow = (props) => {
  return (
    <GridRowWrapper
      columns={props.columns}
      highlighted={props.highlighted}
      onClick={props.onClick}
    >
      {props.children}
    </GridRowWrapper>
  )
}

export default GridRow;
