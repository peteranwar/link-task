// import GoogleSansMed from '../../public/assets/fonts/ProductSans-Medium.woff';


export const pxToRem = value => {
  return `${value / 16}rem`;
};

function responsiveFontSizes({ xs, md, lg }) {
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(xs),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = 'Poppins';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 100 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ xs: 18, md: 35, lg: 40 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 19, md: 28, lg: 30 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 24, sm: 26, md: 30, lg: 34 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 18, md: 19, lg: 20 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 16, md: 17, lg: 18 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ xs: 12, md: 14, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(21),
    ...responsiveFontSizes({ xs: 1, sm: 18, md: 19, lg: 20, xl:21 }),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(13),
    ...responsiveFontSizes({ xs: 10, sm: 11, md: 12, lg: 13, xl:14 }),
  },
  body1: {
    // lineHeight: '21px',
    fontSize: pxToRem(14),
    fontWeight: 500,
    ...responsiveFontSizes({ xs: 12, md: 13, lg: 14}),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(13),
    fontWeight: 500,
    ...responsiveFontSizes({ xs: 11, md: 12, lg: 13}),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ xs: 10, md: 11, lg: 12}),

  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(17),
    textTransform: 'capitalize',
    fontFamily: 'GoogleSansMed',
  },
};
