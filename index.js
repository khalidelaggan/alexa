var sampleData = require('./sample.json')
var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send(sampleData)
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
