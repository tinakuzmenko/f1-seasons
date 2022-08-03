import { FC, PropsWithChildren } from 'react';

import { SectionTitleWrapper } from './styles';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => (
  <SectionTitleWrapper>{children}</SectionTitleWrapper>
);

export default SectionTitle;
