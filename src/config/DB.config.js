require('dotenv').config();
module.exports = {
    "development":{
        "username":process.env.USER_NAME,
        "password":process.env.PASSWORD,
        "database":process.env.DATABASE,
        "dialect":process.env.DIALECT,
        "host":process.env.HOST
        
    },
    "test":{
        "host":"127.0.0.1",
        "username":"root",
        "database":"FriendsDB",
        "password":null,
        "dialect":"mysql"
    },
    "production":{
        "user":"root",
        "password":"",
        "database":"Saloon Database",
        "dialect":"mysql"
    }
}