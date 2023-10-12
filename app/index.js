const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

//const sql = `CREATE TABLE people (name VARCHAR(255), id INT AUTO_INCREMENT PRIMARY KEY)`


app.get('/', (req,res) => {
    const sql = `select * from people`

    connection.connect(function(err) {
        if (err) throw err;
        connection.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
    res.send('<h1>Full Cycle Rocks!</h1>')
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})