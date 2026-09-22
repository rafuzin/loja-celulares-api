import pool from '../config/db.js'

class Celulares {

    async getAll() {
        const res = await pool.query('SELECT * FROM celulares')
        return res.rows
    }

    async create(dados) {
        const { modelo, marca, preco, quantidade_estoque } = dados

        const res = await pool.query(
            'INSERT INTO celulares (modelo, marca, preco, quantidade_estoque) VALUES ($1, $2, $3, $4) RETURNING *',
            [modelo, marca, preco, quantidade_estoque]
        )

        return res.rows[0]
    }
}

export default Celulares