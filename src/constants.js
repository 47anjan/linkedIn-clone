export const BREAKPOINTS = {
  tabletMin: 853,
  laptopMin: 1024,
  desktopMin: 1440,
};

export const QUERIES = {
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
};
