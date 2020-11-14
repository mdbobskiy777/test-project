const express = require('express');
const app = express();
const Database = require('better-sqlite3');
const db = new Database('./database.db', {verbose: console.log});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users',
    (request, response) => {
        console.log(request.query.currentPage);
        console.log(request.query.count);
        const leftValue = (request.query.currentPage - 1) * request.query.count + 1
        const rightValue = request.query.currentPage * request.query.count
        const totalUsersInfo = db.prepare('SELECT COUNT (*) FROM users')
        const totalUsersCount = totalUsersInfo.all()[0]['COUNT (*)']

        const users = db.prepare(`SELECT users.id, users.first_name,
        users.last_name, users.email, users.gender, 
        users.ip_address, users_statistics.page_views, 
        users_statistics.clicks FROM users INNER JOIN users_statistics 
        ON users.id = users_statistics.user_id 
        WHERE id <=${rightValue} AND id >=${leftValue}  GROUP BY users.id`)
        const res = users.all();
        response.send({users: res, totalUsersCount: totalUsersCount})
    })
app.get('/user',
    (request, response) => {
        console.log(request.query.id);
        console.log(request.query.from);
        console.log(request.query.to);
        const user = db.prepare(`SELECT users.first_name,
         users.last_name FROM users WHERE id =${request.query.id}`).all()
        const fullName = Object.values(user[0]).join(' ')
        console.log(fullName)
        const row = db.prepare(`SELECT users_statistics.page_views, 
        users_statistics.clicks, users_statistics.date FROM users 
        INNER JOIN users_statistics ON 
        users.id = users_statistics.user_id WHERE id =${request.query.id}`)
        const res = row.all();
        let filtered;
        if (!request.query.from && !request.query.to) {
            filtered = res.filter((e, i) => i > 0 && i <= 7)
        } else {
            filtered = res.filter(e => {
                return Date.parse(e.date) >= Date.parse(request.query.from) &&
                    Date.parse(e.date) <= Date.parse(request.query.to)
            })
        }
        response.send({user: filtered, fullName: fullName})
    })

app.listen(3001);