
import cardController from '../controllers/cardController'

const router = require('express').Router()

router.post('/addFlashCard', cardController.addFlashCard)

router.get('/allFlashCards', cardController.getAllFlashCards)

router.get('/editFlashCard/:id', cardController.editFlashCard)

router.get('/deleteFlashCard/:id', cardController.deleteFlashcard)

export default router;