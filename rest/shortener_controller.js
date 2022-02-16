const mongoose = require('mongoose')
const Urls = require('../models/urls')

class ShortenerController{

    async index (req, res) {
        res.status(200).json({message: 'Welcome to my url shortener api.'})
    }

    async getAll (req, res) {
        try{
            const all = await Urls.find()
            res.json(all)
        } catch (err){
            res.status(500).json({message: err.message})
        }
    }

    async getOne (req, res) {
        res.status(200).json({})
    }

    async create (req, res) {
        const shortUrl = new Urls({
            full: req.body.full
        })
        try{
            const newUrl = await shortUrl.save()
            res.status(201).json(newUrl)
        }catch (err){
            res.status(400).json({message: err.message})
        }
    }

    async delete (req, res) {
        res.status(200).json({})
    }
}

module.exports = new ShortenerController()