export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif;`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    cardBg:
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
    buttonBg: '#EBD8FF',
    buttonActiveBg: '#5CD3A8',
    mainGrey: '#373737',
    transparent: 'transparent',
    currentColor: 'currentColor',
  },
  shadows: {
    cartShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
    buttonShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    buttonActiveShadow: '0px 5px 7px rgba(0, 0, 0, 0.25)',
    dividerShadow:
      '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
    avatarShadow: `0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF`,
  },
  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToMd: '(min-width: 320px) and (max-width: 767.99px)',
    mdToLg: '(min-width: 768px) and (max-width: 1279.99px)',
    toMd: '(max-width: 767.99px)',
    smToLg: '(min-width: 320px) and (max-width: 1279.99px)',
  },
});
