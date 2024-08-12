import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppLayout from '../layout/applayout'
import FlashcardListVersion from './FlashcardListVersion';
import { ToastContainer, toast } from 'react-toastify';
import backendURL from '../constants';
import staticflashcards from '../staticfiles/flashcards';

const ManageCards = () => {

    const [flashcards, setflashcards] = useState(null);

    useEffect(() => {
        axios.get(`${backendURL}/api/cards/getAllFlashCards`)
            .then(response => {
                setflashcards(response.data.flashcards);
            })
            .catch(error => console.error('Error fetching cards: ', error));

    }, []);

    const handleDelete = (cardID) => {
        axios.get(`${backendURL}/api/cards/deleteFlashCard/${cardID}`)
            .then(
                response => {
                    setflashcards(response.data.flashcards);
                    toast.success("Successfully deleted flashcard!!");
                }
            )
            .catch(error => console.error('Error deleting card: ', error));
    };

    return (
        <AppLayout>

            <ToastContainer />

            {staticflashcards?.map((card, index) => {
                return (
                    <FlashcardListVersion key={index} cardID={card?.id} title={card?.question}
                        description={card?.answer} handleDelete={handleDelete} />
                )
            })}

        </AppLayout>
    )
}

export default ManageCards