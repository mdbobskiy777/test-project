const express = require('express');
const app = express();

let users = [];
let user = [];

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('connected to database')
})
/*db.run('CREATE TABLE usrs(id INTEGER PRIMARY KEY, name text NOT NULL);', (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('table created')
})*/
/*db.serialize(function () {
    db.all("select name from sqlite_master where type='table'", function (err, tables) {
        console.log(tables);
    });
})*/
/*let sql = 'SELECT id, first_name, last_name FROM users WHERE id < 10'*/
let sql = 'SELECT users.id, users.first_name,users.last_name,' +
    ' users.email, users.gender, users.ip_address, ' +
    'users_statistics.page_views,' +
    ' users_statistics.clicks FROM users INNER JOIN users_statistics ON ' +
    'users.id = users_statistics.user_id WHERE id <2'
db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    users = [...rows]
    /*
        rows.forEach((row) => {
            console.log(row);
        });*/
});
let sql1 = 'SELECT users_statistics.page_views, users_statistics.clicks, users_statistics.date FROM users INNER JOIN users_statistics ON users.id = users_statistics.user_id WHERE id <2'

db.all(sql1, [], (err, rows) => {
    if (err) {
        throw err;
    }
    user = [...rows]
    /*
        rows.forEach((row) => {
            console.log(row);
        });*/
});
app.get('/users',
    (request, response) => {
        console.log(users[0]);
        console.log(" get users");
        response.send({users: users})
    })
app.get('/user',
    (request, response) => {
        console.log(user[0]);
        console.log(" get user");
        response.send({user: user})
    })
db.close((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("connection closed")
})
app.listen(3001);