const agenceDb = require('../db/desti.db');
const Agence = require('../models/destination');

exports.generateData = async (req, res, next) =>{
    try {
        console.log('generate Agence')
        const result = await Agence.insertMany(agenceDb)
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

exports.getById = async (req, res, next) =>{
    try {
        const filter = {}
        if (req.params.id) filter._id = req.params.id
        else {
            res.status(400).json({ msg: 'ID required' })
            return
        }
        const result = await Agence.findOne(filter)
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

exports.getAll = async (req, res, next) =>{
    try {
        console.log('get All Agence')
        const filter = {}
        if (req.query.id) filter._id = req.query.id
        const result = await Agence.find(filter, null, { sort: { updatedAt: 1 } })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

exports.modifDesti = async (req, res, next) =>{
    try {
        const data = req.body
        console.log("Update Agence: ", data);
        const filter = {}
        if (data._id) filter._id = data._id
        else {
            res.status(404).json({ success: false, msg: "ID required" })
            return
        }
        const agence = await Agence.findOneAndUpdate(filter, data)
        res.json(agence)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

exports.deleteDesti = async (req, res, next) =>{
    try {
        const filter = {}
        if (req.params.id) filter._id = req.params.id
        else {
            res.status(400).json({ msg: 'ID required' })
            return
        }
        const result = await Agence.deleteOne(filter)
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}