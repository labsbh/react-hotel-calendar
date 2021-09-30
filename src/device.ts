import { BreakPoints } from './typings';

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 480,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const device = {
  mobileS: `(min-width: ${size.mobileS}px)`, // S
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`, // M
  tablet: `(min-width: ${size.tablet}px)`, // L
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

const breakpoints: BreakPoints = {
  mobileS: { min: 0, max: size.mobileS },
  mobileM: { min: size.mobileS + 1, max: size.mobileM },
  mobileL: { min: size.mobileM + 1, max: size.mobileL },
  tablet: { min: size.mobileL + 1, max: size.tablet },
  laptop: { min: size.tablet + 1, max: size.laptop },
  laptopL: { min: size.laptop + 1, max: size.laptopL },
  desktop: { min: size.laptopL + 1, max: size.desktop },
  desktopL: { min: size.desktop + 1, max: null },
};

export { breakpoints, device, size };
