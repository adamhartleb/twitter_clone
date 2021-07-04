import express from 'express'
import loginRoutes from './routes/loginRoutes.js'
import registerRoutes from './routes/registerRoutes.js'

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use('/login', loginRoutes)
app.use('/register', registerRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})