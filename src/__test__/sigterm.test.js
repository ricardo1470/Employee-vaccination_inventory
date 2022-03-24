const request = require('supertest');
const routes = require('../routes/index');

describe ('test SIGTERM, signal that is sent to request the process terminates', () => {
    // test SIGTERM, signal that is sent to request the process terminates.
    test.only('run timeout', () => {
        jest.useFakeTimers();

        processEvents = {}

        processEvents.on = jest.fn((signal, cb) => {
            processEvents[signal] = cb;
        });

        processEvents.emit = jest.fn((signal) => {
            processEvents[signal]();
        });

        process.kill = jest.fn((pid, signal) => {
            processEvents.emit(signal);
        });

        const response = request(routes).get('/').send();

        jest.runAllTimers();

        expect(response.status);
    })
});
