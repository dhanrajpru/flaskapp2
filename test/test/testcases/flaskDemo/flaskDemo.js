var util = require('util');
require('dotenv').load();
var testUrl = process.env.FLASK_DEMO_URL;
describe('Flask Demo: ', function () {
	beforeEach(function () {
		browser.waitForAngularEnabled(false);
		browser.get(testUrl);
	});
	var getData = require('../../page/flaskDemoPage.js');
	it('TC-01:As an user fecth the Start Name From Ui and it should match exactly the same', function () {
		browser.sleep(2000);
		expect(getData.startTime.getText()).toBe('Start Time');
		expect(getData.startTime.getText()).not.toBe('Anything except Start Time');
	});
	it('TC-02:As an user fecth the Host Name From Ui and it should match exactly the same', function () {
		expect(getData.hostName.getText()).toBe('Hostname');
		expect(getData.hostName.getText()).not.toBe('Anything except Host Name');
	});
	it('TC-03:As an user fecth the Local Address From Ui and it should match exactly the same', function () {
		expect(getData.localAddress.getText()).toBe('Local Address');
		expect(getData.localAddress.getText()).not.toBe('Anything except Local Address');
	});
	it('TC-04:As an user fecth the Remote Address From Ui and it should match exactly the same', function () {
		expect(getData.remoteAddress.getText()).toBe('Remote Address');
		expect(getData.remoteAddress.getText()).not.toBe('Anything except Remote Address');
	});
	it('TC-04:As an user fecth the Server hit From Ui and it should match exactly the same', function () {
		expect(getData.serverHit.getText()).toBe('Server Hit');
		expect(getData.serverHit.getText()).not.toBe('Anything except Server hit');
	});
});
