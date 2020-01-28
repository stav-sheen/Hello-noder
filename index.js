const express = require("express");
const mysql = require("mysql");
const dbconfig   = require('./config/db.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  connection.query('SELECT * FROM APPLOG LIMIT 1', function (error, results) {
    if (error) throw new Error("Err:", error);

    console.log('result:', results);
    if (results && results.length > 0) {
      let r = results[0];
      let id = r.DEVID;
      console.log('id', id);
      connection.end();
      res.status(200).send(`Test results: ${id}`);
    }
  });
});

if(!module.parent) app.listen(process.env.PORT || 3000);

module.exports = app;
