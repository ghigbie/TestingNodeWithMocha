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
        return a + b;
    }, 1000);
};

let asyncSquare = (a, callback) => {
    setTimeout(() => {
        return a * a;
    }, 1500);
};

module.exports = {
    add,
    square,
    subtract,
    setName,
    asyncAdd
};
