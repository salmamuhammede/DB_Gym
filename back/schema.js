
import mysql from 'mysql';
const db= mysql.createConnection({ //////////////////for connction
    host:'localhost',
    user:'root',
    password:'put your server pass',
    database:'database here'
})
export default db;
