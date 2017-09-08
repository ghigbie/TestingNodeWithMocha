//npm modules
const expect = require('expect');

//user-created modules
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should sqaure a number', () => {
    let  res = utils.square(7);
    expect(res).toBe(49).toBeA('number');
});

it('should subtract a number', () => {
    let res = utils.subtract(5,3);
    expect(res).toBe(2).toBeA('number');
});

it('should expect some values', () => {
    expect(!12).toNotBe(12);
});