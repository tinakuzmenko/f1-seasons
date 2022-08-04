import { FC, PropsWithChildren } from 'react';

import { GridLayoutWrapper } from './styles';

const GridLayout: FC<PropsWithChildren> = ({ children }) => (
  <GridLayoutWrapper>{children}</GridLayoutWrapper>
);

export default GridLayout;
