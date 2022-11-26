export const color = {
  // White and black
  black: '#1E1E1E',
  white: '#FFF',
  // Brand colors
};

export const size = {
  tiny: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  tall: '1rem', // 16px
  big: '1.125rem', // 18px
  huge: '1.375rem', // 20px
  grizzly: '1.5rem', // 24px
  dumbo: '1.75rem', // 26px
  diplodocus: '2rem', // 32px
};

export const weight = {
  regular: 400,
  bold: 700,
};

export const metrics = {
};

export type ThemeType = {
  color: typeof color;
  size: typeof size;
  weight: typeof weight;
  metrics: typeof metrics;
};

const theme: ThemeType = {
  color,
  size,
  weight,
  metrics,
};

export default theme;
