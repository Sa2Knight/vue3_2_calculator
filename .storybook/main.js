module.exports = {
  stories: ["../src/components/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
};
