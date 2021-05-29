export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'theme',
        value: '#090b1a',
      },
    ],
  },
  viewport: {
    viewports: {
      small: {
        name: "sm",
        styles: {
          height: "568px",
          width: "375px",
        },
        type: "mobile",
      },
      large: {
        name: "xl",
        styles: {
          height: "900px",
          width: "1440px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "responsive",
  },
};
