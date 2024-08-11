
import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const NavigationForCards = ({ currentcardId, onChangeCardId, totalCards }) => {
    return (
        <div className='flex flex-row justify-center gap-10 text-center items-center'>
            <div className='rounded-full border-2 p-3 cursor-pointer'
                onClick={() => onChangeCardId(((currentcardId - 1) + totalCards) % totalCards)}>
                <IoMdArrowBack className='text-xl' />
            </div>
            <div>
                <h1 className='font-bold text-xl'>
                    {currentcardId + 1} / {totalCards}
                </h1>
            </div>
            <div className='rounded-full border-2 p-3 cursor-pointer'
                onClick={() => onChangeCardId((currentcardId + 1) % totalCards)}>
                <IoMdArrowForward className='text-xl' />
            </div>
        </div>
    )
}

export default NavigationForCards