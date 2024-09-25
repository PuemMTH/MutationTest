module.exports = {
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "perTest",
    jest: {
      projectType: "custom",
      configFile: "jest.config.js",
      enableFindRelatedTests: true
    },
    mutate: ["src/**/*.js", "!src/**/*.test.js"],
    plugins: ["@stryker-mutator/jest-runner"]
  };