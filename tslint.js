module.exports = {
  env: {
    "jest": true,
    "mocha": true,
    "es6": true,
    "node": true
  },
  extends: ['tslint-config-standard'],
  rules: {
    "no-console": [true, "log", "error"],
    "no-unused-variable": true,
    "no-return-await": false,
    "object-curly-spacing": [true, "never"],
    "await-promise": true,
    "radix": false
  }
}