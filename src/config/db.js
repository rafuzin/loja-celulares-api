import pg from 'pg'
const { Pool } = pg

import 'dotenv/config'

const pool = new Pool()

pool.on('error', (err, Celulares) => {
    console.error('Unexpected error on idle Celulares', err)
    process.exit(-1)
})

export default pool