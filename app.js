const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const port = 8008

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
