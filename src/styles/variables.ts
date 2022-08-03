export interface Sizes {
  [key: string]: string;
}

export interface Colors {
  [key: string]: string;
}

export const sizes: Sizes = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  xl: '960px',
};

export const lightThemeColors: Colors = {
  backgroundColor: '#ffffff',
  fontColor: '#15151e',
  primaryColor: '#e10600',
  secondaryColor: '#1d7874',
  neutralColor: '#7c8483',
  shadowColor: '#f4f4f4f4',
  secondaryShadowColor: 'rgba(29,120,116,0.11)',
};
