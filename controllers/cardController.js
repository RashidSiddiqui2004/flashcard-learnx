import db from "../models"

const Card = db.flashcards
// const User = db.users

const addFlashCard = async (req, res) => {

    let info = {
        title: req.body.title,
        answer: req.body?.answer,
        description: req.body?.description,
    }

    const card = await Card.create(info)
    res.status(200).send(card)
    console.log(card)
}

const getAllFlashCards = async (req, res) => {

    let allcards = await Card.findAll({})
    res.status(200).send(allcards)
    console.log(allcards);
}
 

const getOneCard = async (req, res) => {
    let id = req.params.id
    let flashcard = await Card.findOne({ where: { id: id } })
    res.status(200).send(flashcard)
}
 
const editFlashCard = async (req, res) => {

    let id = req.params.id

    const new_flashcard = await Card.update(req.body, { where: { id: id } })

    res.status(200).send(new_flashcard)

}
 

const deleteFlashcard = async (req, res) => {

    let id = req.params.id

    await Card.destroy({ where: { id: id } })

    res.status(200).send('Flash Card is deleted!')
}



const cardController = {
    addFlashCard, getAllFlashCards, getOneCard, editFlashCard, deleteFlashcard
};

export default cardController;



