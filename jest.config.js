const fs = require('fs');
const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc.test`, 'utf-8'));

module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/__mocks__/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/fixtures/', '/__mocks__/'],
  coverageThreshold: {
    global: {
      branches: 96,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { ...config }],
  },
};
