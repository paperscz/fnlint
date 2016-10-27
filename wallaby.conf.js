module.exports = function () {
  return {
    files: ['src/**/*.js'],
    tests: ['test/**/*.spec.js'],
    testFramework: 'jasmine',
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
