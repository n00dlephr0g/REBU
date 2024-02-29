//importing modules
const { createHash } = require('crypto');


//setting variables
const creds = "./files/security/credentials.json"


//internal functions
function hash(string) {
    return createHash('sha256').update(string).digest('hex');
};


//exported functions
function verify_login(username, password) {

    enteredHash = hash(password);
    
};

function create_user(username, password) {
    enteredHash = hash(password);
};

function delete_user(username, password) {
    enteredHash = hash(password);

};


module.exports = {
    hash: hash, 
    verify_login: verify_login, 
    create_user: create_user,
    delete_user: delete_user};