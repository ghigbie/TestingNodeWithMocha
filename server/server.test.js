const request = require('supertest');

let app = require('./server').app;

it('should return a Welcome to the root response', (done) => {
    request(app)
        .get('/')
        .expect('Welsome to the root')
        .end(done);
});