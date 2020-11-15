const express = require('express');
const app = express();
const Database = require('better-sqlite3');
const db = new Database('./database.db', {verbose: console.log});

const geArrays = (array, key) =>{
   return array.map(obj=>{
        return obj[key]
    })

}
app.use(function (req,
                  res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users',
    (request, response) => {
        const leftValue = (request.query.currentPage - 1) *
            request.query.count + 1
        const rightValue = request.query.currentPage * request.query.count
        const totalUsersInfo = db.prepare('SELECT COUNT (*) FROM users')
        const totalUsersCount = totalUsersInfo.all()[0]['COUNT (*)']

        const users = db.prepare(`SELECT users.id, users.first_name,
            users.last_name, users.email, users.gender,
            users.ip_address, (SELECT SUM(users_statistics.page_views) 
            FROM users_statistics WHERE users_statistics.user_id = users.id)
            AS total_views,
            (SELECT SUM(users_statistics.clicks)
            FROM users_statistics WHERE users_statistics.user_id = users.id)
            AS total_clicks FROM users
            WHERE id <= ${rightValue} AND id >= ${leftValue}`)
        const res = users.all();
        response.send({users: res, totalUsersCount: totalUsersCount})
    })

app.get('/user',
    (request, response) => {
        const user = db.prepare(`SELECT users.first_name || ' '
         || users.last_name  as fullName FROM users WHERE id =${request.query.id}`).all()

        let totalDates = db.prepare(`SELECT  users_statistics.date
        AS totalDates FROM users 
        INNER JOIN users_statistics ON 
        users.id = users_statistics.user_id WHERE id =${request.query.id}`).all()

        totalDates = geArrays(totalDates,"totalDates")
        console.log(totalDates)
        let row
        if (!request.query.from && !request.query.to) {

            row = db.prepare(`SELECT users_statistics.page_views, 
        users_statistics.clicks, users_statistics.date FROM users 
        INNER JOIN users_statistics ON 
        users.id = users_statistics.user_id WHERE id =1 LIMIT 7`)
        } else {
            row = db.prepare(`SELECT users_statistics.page_views, 
        users_statistics.clicks, users_statistics.date FROM users 
        INNER JOIN users_statistics ON 
        users.id = users_statistics.user_id WHERE id =1 
        AND users_statistics.date >= '${request.query.from}'
        AND users_statistics.date <= '${request.query.to}'`)
        }
        const res = row.all();
        response.send({user: res,
            fullName: user[0].fullName,
            totalDates:totalDates})
    })

app.listen(3001);