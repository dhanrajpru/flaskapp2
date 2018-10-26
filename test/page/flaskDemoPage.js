var flaskDemo = {
    startTime: element(by.xpath('//td[text()=" Start Time "]')),
    hostName: element(by.xpath('//td[text()=" Hostname "]')),
    localAddress: element(by.xpath('//td[text()=" Local Address "]')),
    remoteAddress: element(by.xpath('//td[text()=" Remote Address "]')),
    serverHit: element(by.xpath('//td[text()=" Server Hit "]'))
};
module.exports = flaskDemo;