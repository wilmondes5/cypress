const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2xp8pg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
