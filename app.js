const express = require('express')
const router = require('./rest/shortener_router')
const db = require('./database/db')
const Urls = require('./models/urls')

const app = express()

app.use(express.json())
app.use('/api',router)

db.connect()

app.get('/:shortUrl', async (req, res) => {
    const short = await Urls.findOne({ short: req.params.shortUrl })
    console.log(short)
    if (short == null) return res.sendStatus(404)
    res.redirect(short.full)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})