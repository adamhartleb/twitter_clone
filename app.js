import express from 'express'
import loginRoutes from './routes/loginRoutes.js'

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.static('public'))

app.use('/login', loginRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})