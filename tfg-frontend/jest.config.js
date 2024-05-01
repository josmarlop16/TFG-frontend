module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)',
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^lottie-web$': '<rootDir>/lottie-web.mock.js',
  },
};
