module.exports = {
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