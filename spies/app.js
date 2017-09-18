const db = require('./db.js');

let handleSignup = (email, password) =>{
    //check if email already exists
    db.saveUser({email, password});
    //send the welcome email
};

module.exports = {
    handleSignup
};
