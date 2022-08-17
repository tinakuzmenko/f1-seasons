import React, { FC, PropsWithChildren } from 'react';

import { CenteredContentWrapper } from './styles';

const CenteredContent: FC<PropsWithChildren> = ({ children }) => (
  <CenteredContentWrapper>{children}</CenteredContentWrapper>
);

export default CenteredContent;
