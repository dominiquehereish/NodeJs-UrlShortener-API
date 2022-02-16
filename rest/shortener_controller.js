const mongoose = require('mongoose')
const urls = require('../models/urls')

class ShortenerController{

    async index (req, res) {
        res.status(200).json({message: 'Welcome to my url shortener api.'})
    }

    async getAll (req, res) {
        res.status(200).json({})
    }

    async getOne (req, res) {
        res.status(200).json({})
    }

    async createOne (req, res) {
        res.status(200).json({})
    }

    async delete (req, res) {
        res.status(200).json({})
    }
}

module.exports = new ShortenerController()