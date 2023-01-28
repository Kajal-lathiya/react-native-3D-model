export const COLORS = {
  white: '#fff',
  black: '#000000',
  themeGray: 'rgb(39, 45, 53)',
};
export const SIZES = {
  // font sizes
  largeTitle: 40,
  h2: 22,
  h3: 16,
  h4: 14,
  body3: 16,
  body4: 14,
};
export const FONTS = {
  largeTitle: {fontSize: SIZES.largeTitle},
  h2: {fontWeight: 'bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontWeight: 'bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontWeight: 'bold', fontSize: SIZES.h4, lineHeight: 22},
  body3: {fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
