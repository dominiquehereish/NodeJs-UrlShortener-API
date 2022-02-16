const express = require('express')
const router = require('./rest/shortener_router')
const db = require('./database/db')
const urls = require('./models/urls')

const app = express()

app.use(express.json())
app.use('/api',router)

db.connect()

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})