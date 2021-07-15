module.exports = {
  roots: [
    "tests",
  ],
  coverageReporters: [
    "lcov",
    "json",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "^.+\\.(ts|tsx)?$"
  ],
  maxWorkers: 1,
  coverageDirectory: "./reports/coverage/",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};
