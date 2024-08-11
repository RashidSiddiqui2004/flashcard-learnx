import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppLayout from '../layout/applayout'
import FlashcardListVersion from './FlashcardListVersion';
import { ToastContainer, toast } from 'react-toastify';

const ManageCards = () => {
    const [flashcards, setflashcards] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cards/getAllFlashCards')
            .then(response => {
                setflashcards(response.data.flashcards); 
            })
            .catch(error => console.error('Error fetching cards: ', error));

    }, []);

    const handleDelete = (cardID) => {
        axios.get(`http://localhost:8080/api/cards/deleteFlashCard/${cardID}`)
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

            {flashcards?.map((card, index) => {
                return (
                    <FlashcardListVersion key={index} cardID={card?.id} title={card?.title}
                        description={card?.description} handleDelete={handleDelete} />
                )
            })}

        </AppLayout>
    )
}

export default ManageCards