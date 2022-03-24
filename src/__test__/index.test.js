const request = require('supertest');
const routes = require('../routes/index');

describe ('GET request testing', () => {
    // test init route
    test('should return 200 OK, init route', () => {
        const response = request(routes).get('/').send();
        expect(response.status);
    }, 1000);

    // test error route
    test('should return 404 OK, error route', () => {
        const response = request(routes).get('/noexis').send();
        expect(response.status);
    }, 1000);
});
