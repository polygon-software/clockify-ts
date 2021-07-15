module.exports = {
  roots: [
    "src",
  ],
  coverageReporters: [
    "json-summary",
  ],
  silent: false,
  maxWorkers: 1,
  coverageDirectory: "./reports/coverage/",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};
