const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const config = require('./src/config.js')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

app.listen(process.env.PORT||config.port, () => console.log(`server start on port ${config.port}`))
