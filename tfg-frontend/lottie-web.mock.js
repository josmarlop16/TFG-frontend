// lottie-web.mock.js
const lottieWeb = {
  play: jest.fn(),
  stop: jest.fn(),
  loadAnimation: jest.fn(),
  destroy: jest.fn()
};

module.exports = lottieWeb;