import {GridRowWrapper} from './styles';

const GridRow = (props) => {
  return (
    <GridRowWrapper
      highlighted={props.highlighted}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </GridRowWrapper>
  )
}

export default GridRow;
