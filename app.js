const express = require('express')

const db = require('./database/db')

const app = express()


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})