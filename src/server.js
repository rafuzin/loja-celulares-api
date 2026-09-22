import express from 'express'
import celularRouter from './routes/celulares.routes.js'

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Servidor funcionando'
    })
})

server.use('/celulares', celularRouter)

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})