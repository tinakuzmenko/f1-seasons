import 'styled-components';

import { Colors, Sizes } from '../styles/variables';

declare module 'styled-components' {
  export interface Theme extends DefaultTheme {
    sizes: Sizes;
    palette: Colors;
  }
}
