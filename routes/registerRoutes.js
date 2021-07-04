import express from 'express'
import validation from '../middleware/validation.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).render('register')
})

router.post('/', (req, res) => {
    let { body } = req.body
    body = validation.trim(body, ['password', 'passwordConfirm'])

    const allFieldsHaveValues = validation.check(body, [
        'firstName', 'lastName', 'username', 'password', 'passwordConfirm'
    ])

    if (allFieldsHaveValues) {

    } else {
        const errorMessage = "Each field needs a valid value."
        res.status(200).render('register', { ...body, errorMessage })
    }
})


export default router