const uudiv4 = require('uuid/v4')

/*
*   createUser
*   Creates a user
*   @prop id {string}
*   @prop name {string}
*   @param {object}
*       name {string}
*/
const createUser = ({name = ""} = {}) => ({
    id: uudiv4(),
    name
})

/*
*   createMessage
*   Creates a message object.
*   @prop id {string}
*   @prop time {Date} the time in 24hr format i.e. 14:22
*   @prop message {string} actual string message
*   @prop sender {string} sender of the message
*   @param {object}
*       message {string}
*       sender {string}
*/
const createMessage = ({message = "", sender = ""} = { }) => ({
    id: uudiv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
})

/*
*   createChat
*   Creates a chat object.
*   @prop id {string}
*   @prop name {string}
*   @prop message {Array.Message}
*   @prop user {Array.string}
*   @param {object}
*       messages {Array.Message}
*       name {string}
*       users {Array.string}
*/
const createChat = ({messages = [], name = "Community", users = []} = {}) => ({
    id: uudiv4(),
    name,
    messages,
    users,
    typingUsers: []
})

/*
*   @param date {Date}
*   @return a string represented in 24hr time i.e '11:30', '19:30'
*/
const getTime = (date) => {
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}