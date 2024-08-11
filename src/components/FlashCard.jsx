import React, { useState } from 'react';
import './FlashCard.css';
import { FcIdea } from "react-icons/fc";

const FlashCard = ({ title, question, answer, description, isRevealed, onCardClick }) => {

    return (
        <div className='flashcard-container'>
            <div
                className={`flashcard ${isRevealed ? 'flip' : ''}`}
                onClick={() => {onCardClick()}}
            >
                {
                    !isRevealed &&
                    <h1 className='absolute z-10 p-3 flex gap-2'>
                        <FcIdea className='text-sm' />
                        <span className='text-xs'>Click to reveal the answer</span>
                    </h1>
                }

                <div className='front'>
                    <h1 className={`italic ${title ? "text-4xl font-semibold" : "text-2xl font-semibold"}`}>{title ?? question}</h1>
                </div>
                <div className='back'>
                    <h1 className={`italic ${description ? "text-lg" : "text-3xl font-semibold"}`}>
                        {description ?? answer}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
