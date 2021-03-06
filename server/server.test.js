const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Express server testing', () => {
    
    describe('root', () => {
        it('should return a Welcome to the root response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Welcome to the root')
                .end(done);
        });
    });
    
    it('should return an object with an error message', (done) => {
        request(app)
            .get('/fail')
            .expect(404)
            .expect({
                error: 'Page not found.' 
            })
            .end(done);
    });
    
    it('should return an object with an error message', (done) => {
        request(app)
            .get('/newTry')
            .expect(404)
            .expect({
                error: 'Page not found',
                name: 'Some App v1.0'
            })
            .end(done);
    });
    
    it('should return a \'<h1>This is the home of the cow</h1>\' response', (done) => {
        request(app)
            .get('/moo')
            .expect(200)
            .expect('<h1>This is the home of the cow</h1>')
            .end(done);
    });
    
    describe('/meow', () => {
        it('should return an object response reflective of a cat', (done) => {
            request(app)
                .get('/meow')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'No cat here'
                    });
                })
                .end(done);
        }); 
    });
    
    describe('/users', () =>{
        it('should return a specific user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Mr. Duck',
                        age: 23
                    });
                })
                .end(done);
        });
    });
});