const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

app.use(morgan('tiny'))

app.use('/', express.static(__dirname))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

