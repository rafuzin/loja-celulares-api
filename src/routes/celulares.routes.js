import express from 'express'
import Celulares from '../services/celular.service.js'

const celularRouter = express.Router()
const celularService = new Celulares()

celularRouter.get('/', async (req, res) => {
    const celulares = await celularService.getAll()
    return res.json(celulares)
})

celularRouter.post('/', async (req, res) => {
    const celular = await celularService.create(req.body)
    return res.status(201).json(celular)
})

export default celularRouter