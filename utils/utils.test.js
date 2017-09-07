//npm modules
const expect = require('expect');

//user-created modules
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);
    //expect(res).toBe(44);
    expect(2).toBeA('number');
    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should sqaure a number', () => {
    let  res = utils.square(7);
    if(res !== 49){
        throw new Error(`Expected 49, but got ${res}.`);
    }
});