import React, { useState } from 'react'
import AppLayout from '../layout/applayout'
import FlashcardListVersion from './FlashcardListVersion';

const ManageCards = () => {
    const [flashcards, setFlashCards] = useState([
        {
            question: "Outline, list in steps, or follow the path.",
            answer: "Trace"
        },
        {
            question: "A technique for solving a problem by breaking it down into smaller problems.",
            answer: "Divide and Conquer"
        },
        {
            question: "A function that calls itself to solve smaller instances of the same problem.",
            answer: "Recursion"
        },
        {
            question: "A data structure that follows the Last In, First Out (LIFO) principle.",
            answer: "Stack"
        },
        {
            question: "A programming paradigm based on the concept of objects containing both data and behavior.",
            answer: "Object-Oriented Programming"
        }
    ]);

    const handleDelete = (index) => {
        const newCards = flashcards.filter((_, i) => i !== index);
        setFlashCards(newCards);
    };

    return (
        <AppLayout>

            {flashcards.map((card, index) => {
                return (
                    <FlashcardListVersion key={index} id={index} question={card?.question}
                        answer={card?.answer} handleDelete={handleDelete} />
                )
            })}

        </AppLayout>
    )
}

export default ManageCards