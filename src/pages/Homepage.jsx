import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FlashCard from '../components/FlashCard';
import NavigationForCards from '../components/NavigationForCards';
import AppLayout from '../layout/applayout';

const Homepage = () => {

    const [flashcards, setflashcards] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cards/getAllFlashCards')
            .then(response => {
                setflashcards(response.data.flashcards);
            })
            .catch(error => console.error('Error fetching users:', error));

    }, []);

    // const flashcards = [
    //     {
    //         question: "Outline, list in steps, or follow the path.",
    //         answer: "Trace"
    //     },
    //     {
    //         question: "A technique for solving a problem by breaking it down into smaller problems.",
    //         answer: "Divide and Conquer"
    //     },
    //     {
    //         question: "A function that calls itself to solve smaller instances of the same problem.",
    //         answer: "Recursion"
    //     },
    //     {
    //         question: "A data structure that follows the Last In, First Out (LIFO) principle.",
    //         answer: "Stack"
    //     },
    //     {
    //         question: "A programming paradigm based on the concept of objects containing both data and behavior.",
    //         answer: "Object-Oriented Programming"
    //     }
    // ];

    const [currentcardId, setCurrentCardId] = useState(0);

    const handleCardChange = (newCardId) => {
        if (newCardId < 0 || newCardId >= flashcards.length) {
            return false;
        }
        setCurrentCardId(newCardId);
        return true;
    }
    return (
        <AppLayout>

            <div className='mx-[20vw] my-[10vh]'>
                {
                    flashcards !== null &&
                    <FlashCard
                        question={flashcards[currentcardId]?.question}
                        answer={flashcards[currentcardId]?.answer}
                        title={flashcards[currentcardId]?.title}
                        description={flashcards[currentcardId]?.description}
                    />
                }
            </div>

            <NavigationForCards totalCards={flashcards?.length} currentcardId={currentcardId}
                onChangeCardId={handleCardChange} />
        </AppLayout>
    )
}

export default Homepage