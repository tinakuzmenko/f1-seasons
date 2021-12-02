import {GridHeaderWrapper} from './styles';

const GridHeader = (props) => {
  return <GridHeaderWrapper item={props.item}>{props.children}</GridHeaderWrapper>
}

export default GridHeader;
