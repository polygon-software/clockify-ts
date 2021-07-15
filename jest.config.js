module.exports = {
  roots: [
    "tests",
  ],
  coverageReporters: [
    "lcov",
    "json",
    "text-summary",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**"
  ],
  testResultsProcessor: "jest-sonar-reporter",
  maxWorkers: 1,
  coverageDirectory: "./reports/coverage/",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};
