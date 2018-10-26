exports.config = {
  seleniumAddress: "http://10.0.0.221:4444/wd/hub",
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600"]
    }
  },
  framework: 'jasmine',
  onPrepare: function () {
    var AllureReporter = require('../node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },
  specs: [
    '../testcases/flaskDemo/flaskDemo.js',
    
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 500000
  }
};
