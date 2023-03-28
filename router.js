const { Router } = require('express')
const pool = require('./database')

const router = Router();

router.get('/user', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * from users')
        res.json({ dateien: rows })

    } catch (error) {
        res.sendStatus(404)
    }
    // res.send('Hello from the router')
})

router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id=$1;', [id])
        res.json({ dateien: rows })
    } catch (error) {
        res.sendStatus(404)
    }
})

//

router.post('/user', async (req, res) => {
    const { firstname, lastname, age } = req.body;
    try {
        const { rows } = await pool.query('INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *', [first_name, last_name, age])
        res.json({ data: rows })
    } catch (error) {
        res.sendStatus(404)
    }
})



module.exports = router;