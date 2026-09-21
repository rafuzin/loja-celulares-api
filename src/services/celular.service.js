import pool from '../config/db.js'

class Celulares{
    async getAll(){
        const res = await pool.query("SELECT *");
        return resrows;
    }

    async create(dados){
        const res = await pool.query("INSERT INTO... RETURNING*", (dados));
        return res.rows(0)
    }
}

export default Celulares