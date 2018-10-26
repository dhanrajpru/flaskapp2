var flaskDemo = function () {
    var flaskType = require('../page/flaskDemoPage.js');
    this.startTime = function () {
        flaskType.startTime.click();
    };
    this.hostName = function () {
        flaskType.hostName.click();
    };
    this.localAddress = function () {
        flaskType.localAddress.click();
    };
    this.remoteAddress = function () {
        flaskType.remoteAddress.click();
    };
    this.serverHit = function () {
        flaskType.serverHit.click();
    };
};
module.exports = new flaskDemo();