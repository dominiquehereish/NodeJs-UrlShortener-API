const mongoose = require('mongoose')
const shortId = require('shortid')
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
        let url
        try{
            url = await Urls.findOne({short: req.body.short})
            res.json(url)
            if(url == null){
                return res.status(404).json({message: 'can not find this link in database.'})
            }
        }catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    async create (req, res) {
        let fullUrl = req.body.full
        let redirect = req.body.short
        console.log(redirect)
        if ( redirect == undefined){
            redirect = shortId.generate()
            console.log(redirect)
        }else{
            let exists = await Urls.findOne({short: redirect})
            if (exists != undefined){
                console.log("redirect exists")
            }else{
                console.log(exists)
            }
        }
        const shortUrl = new Urls({
            full: fullUrl,
            short: redirect
        })
        try{
            const newUrl = await shortUrl.save()
            res.status(201).json(newUrl)
        }catch (err){
            res.status(400).json({message: err.message})
        }
    }

    async delete (req, res) {
        let url
        try{
            url = await Urls.findOne({short: req.body.short})
            await url.remove()
            res.json({ message: 'Deleted Short link successfully.' })
            if(url == null){
                return res.status(404).json({message: 'can not find short link.'})
            }
        }catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}

module.exports = new ShortenerController()