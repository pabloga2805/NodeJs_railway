import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'
//la crecaión de la app web en Node.js con express
const app = express()
//el puerto de nuestra app web por defecto va a ser el 3000
app.listen (PORT)
console.log ('servidor en el puerto 3000')

app.get ('/', async (req,res) => {
    //res.send ('Implantación de app web')
    const [result] = await pool.query ('Select * from users')
    res.json(result)
})
app.get ('/ping', async(req,res) => {
    const result = await pool.query ('Select "PG" as result')
    res.send (result[0])
})
app.get ('/create', async(req, res) => {
    const insertar = await pool.query ('Insert into users (id, name) Values ("pablo")')
    console.log (insertar[0])
})

