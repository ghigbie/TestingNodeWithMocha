//npm modules
const expect = require('expect');

//user-created modules
const utils = require('./utils');

describe('Utils - Sync', () => {
    
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    describe('#square', () => {
        it('should sqaure a number', () => {
            let  res = utils.square(7);
            expect(res).toBe(49).toBeA('number');
        });
    });

    //to be uses 
    it('should subtract a number', () => {
        let res = utils.subtract(5,3);
        expect(res).toBe(2).toBeA('number');
    });
    
    it('should expect some values', () => {
        expect(!12).toNotBe(12);
    });
    
    it('should expect some values', () => {
        expect('Bubba').toEqual('Bubba'); 
    });
    
    it('should contain a specified value', () => {
        let numberArray = [1, 2, 3, 4, 9];
        expect(numberArray).toInclude(4); 
    });
    
    it('should contain a value', () => {
        let person = {
            name: 'Bubba',
            age: 25,
            location: 'Hilo, HI'
        };
        expect(person).toInclude({
            age: 25
        });
        expect(person).toExclude({
            age: 21
        });
    });
    
    it('should verify two name values are set', () => {
        let user = utils.setName({}, "Mike Sans");
        expect(user).toBeAn('object');
        expect(user.firstName).toEqual('Mike').toBeA('string');
        expect(user.lastName).toEqual('Sans').toBeA('string');
    });
    
    it('should return an object with a firstName value', () => {
        let user = utils.setName({}, 'Sammy Davis');
        expect(user.firstName).toEqual('Sammy').toBeA('string');
    });
    
    it('should return an object with a lastName value', () => {
        let user = utils.setName({}, 'Gilberto Gil');
        expect(user.lastName).toEqual('Gil').toBeA('string');
    });
    
    it('should include two names', () => {
        let user = {location: 'Houston', age: '25'};
        let res = utils.setName(user, 'Bubba Park');
        expect(res).toInclude({
            location: 'Houston',
            age: 25,
            firstName: 'Bubba',
            lastName: 'Park'
        });
    });
});

describe('Utils - Async', () => {
    it('should async add two numbers', (done) => { //"done" is an argument that allows mocha to do async testing
    utils.asyncAdd(4, 6, (sum) => {
        expect(sum).toBe(10).toBeA('number');
        done();
        });
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (product) => {
            expect(product).toBe(16).toBeA('number');
            done();
        });
    });
    
    it('should async multiply two numbers', (done) => {
       utils.asyncMultiply(5, 7, (product) => {
           expect(product).toBe(35).toBeA('number');
           done();
       });
    });
});
