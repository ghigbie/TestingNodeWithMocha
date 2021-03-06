let add = (a, b) => a + b;
let square = (x) => x * x;
let subtract =(a, b) => a - b;
let setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

let asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

let asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1500);
};

let asyncMultiply = (a, b, callback) => {
    setTimeout(() => {
        callback(a * b);
    }, 1600);
};

module.exports = {
    add,
    square,
    subtract,
    setName,
    asyncAdd,
    asyncSquare, 
    asyncMultiply
};
