import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FlashCard from '../components/FlashCard';
import NavigationForCards from '../components/NavigationForCards';
import AppLayout from '../layout/applayout';
import LandingPage from '../components/LandingPage';
import backendURL from '../constants';
import staticflashcards from '../staticfiles/flashcards';

const Homepage = () => {

    const [flashcards, setflashcards] = useState(null);

    useEffect(() => {
        axios.get(`${backendURL}/api/cards/getAllFlashCards`)
            .then(response => {
                setflashcards(response.data.flashcards);
            })
            .catch(error => console.error('Error fetching users:', error));

    }, []);



    const [currentcardId, setCurrentCardId] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleFlip = () => {
        setIsRevealed(!isRevealed);
    }

    const handleCardChange = (newCardId) => {
        if (newCardId < 0 || newCardId >= staticflashcards.length) {
            return false;
        }
        setIsRevealed(false);
        setCurrentCardId(newCardId);
        return true;
    }

    return (
        <AppLayout>
            <LandingPage />

            <div className='mx-5 md:mx-[20vw] my-[10vh]' id='flashcards'>
                {
                    staticflashcards !== null &&
                    <FlashCard
                        question={staticflashcards[currentcardId]?.question}
                        answer={staticflashcards[currentcardId]?.answer}
                        title={staticflashcards[currentcardId]?.title}
                        description={staticflashcards[currentcardId]?.description}
                        isRevealed={isRevealed}
                        onCardClick={handleFlip}
                    />
                }

            </div>
            <div className='my-[10vh]'>
                <NavigationForCards totalCards={staticflashcards?.length} currentcardId={currentcardId}
                    onChangeCardId={handleCardChange} />

            </div>

        </AppLayout>
    )
}

export default Homepage