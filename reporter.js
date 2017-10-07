/* eslint-disable no-underscore-dangle, no-unused-vars, class-methods-use-this */

// https://facebook.github.io/jest/docs/en/configuration.html#reporters-array-modulename-modulename-options

/**
 * Available methods: onRunStart, onTestStart, onTestResult, onRunComplete
 */
class Reporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        // console.log('Custom reporter output:');
        // console.log('GlobalConfig: ', this._globalConfig);
        // console.log('Options: ', this._options);
    }
}

module.exports = Reporter;
