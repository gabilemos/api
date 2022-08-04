const express = require('express')
const app = express()

app.get('/db.json')
    .then(function (response) {
       
        let lugares = response;
      
      })