const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,

    // env: {
    //   commandDelay: 100,
    // },
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
