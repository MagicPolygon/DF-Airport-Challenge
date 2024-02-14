import Weather from '../src/weather.js';

// Test 7
describe('Weather', function () {
    var weather;

    beforeEach(function () {
        weather = new Weather();
    });

    it('isStormy returns a boolean', function () {
        expect(typeof weather.isStormy()).toEqual('boolean');
    });
});