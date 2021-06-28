const express = require('express')

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/', (req, res) => {
    const title = 'Home'

    res.render('home', { title })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})