const Jdb = require('./Jdb');
//create DB
const db = new Jdb('db');
//CAREATE cOLLECTIONS
const users=db.createCollection('users');
const comments=db.createCollection('comments');

let user1 = {
    name:'midhun',
    country: 'india'
}

let user2 = {
    name:'midhun',
    country: 'india'
}

let a =[user1,user2];
users.save(a);

let u=users.find({});
console.log(u);