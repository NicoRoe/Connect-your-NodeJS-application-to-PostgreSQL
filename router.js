const{Router} = require('express')
const pool = require('./database')

const router = Router();

router.get('/', (req, res)=>{
    res.send('Hello from the router')
})

module.exports = router;