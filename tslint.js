module.exports = {
  env: {
    "jest": true,
    "mocha": true,
    "es6": true,
    "node": true
  },
  extends: ['tslint-config-standard'],
  rules: {
    "no-duplicate-imports": false,
    "no-unused-variable": true,
    "no-return-await": false,
    "object-curly-spacing": false,
    "await-promise": true,
    "radix": false
  }
}