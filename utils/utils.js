let add = (a, b) => a + b;
let square = (x) => x * x;
let subtract =(a, b) => a - b;
let setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

module.exports = {
    add,
    square,
    subtract,
    setName
};
