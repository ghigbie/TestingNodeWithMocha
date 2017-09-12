const request = require('supertest');

let app = require('./server').app;

it('should return a Welcome to the root response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Welcome to the root')
        .end(done);
});

it('should return a json with an error message', (done) => {
    request(app)
        .get('/fail')
        .expect(404)
        .expect({
            error: 'Page not found.' 
        })
        .end(done);
});