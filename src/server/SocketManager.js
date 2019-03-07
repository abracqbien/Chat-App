const io = require('./index.js').io;
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../Events');
const { createUser, createMessage, createChat } = require('../Factories');

const connectedUser = {  }

module.exports = function(socket) {
    console.log('Socket Id' + socket.id);

    // Verify Username
    socket.on(VERIFY_USER, (nickname, callback) => {
        if(isUser(connectedUser, nickname)) {
            callback({ isUser: true, user: null})
        } else {
            callback({ isUser: false, user: createUser({name: nickname})})
        }
    })
    // User Connects with username

    // User disconnects

    // User logouts
}

/*
*   Adds user to list passed in.
*   @param userList {Object} Object with key valu pairs of Users
*   @param user {string} the user to added to the list.
*   @return userList {Object} Object with key value pairs of Users
*/
function addUser(userList, user) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
}

/*
*   Adds user to list passed in.
*   @param userList {Object} Object with key valu pairs of Users
*   @param username {string} name of user to be removed
*   @return userList {Object} Object with key value pairs of Users
*/
function removeUser(userList, username) {
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

/*
*   Checks if the user is in list passed in.
*   @param userList {Object} Object with key valu pairs of Users
*   @param username {string}
*   @return userList {Object} Object with key value pairs of Users
*/
function isUser(userList, username) {
    return username in userList
}