
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const EditForm = ({ cardId, cardQuestion, cardAnswer, handleToggleEdit }) => {

    const [cardData, setCardData] = useState({
        question: cardQuestion,
        answer: cardAnswer
    })

    const handleCardEdit = () => {
        handleToggleEdit();
    }

    return (
        <div className='fixed md:w-[50vw] md:mx-[25vw] p-6 md:p-2
             z-50 inset-0 flex items-center justify-center bg-opacity-70'>

            <div className='bg-slate-800 relative w-full p-6 rounded-lg shadow-lg'>

                <h1 className='text-2xl font-semibold mb-4'>Edit FlashCard</h1>

                <IoMdClose className='absolute top-4 right-6 md:top-0 md:right-6 text-lg cursor-pointer' onClick={handleToggleEdit} />

                <div>
                    <label htmlFor="term" className='text-left block font-medium mb-2'>Enter Question</label>
                    <input
                        type="text"
                        value={cardData.question}
                        placeholder='Enter a title like Recursion, Dynamic Programming, Deadlock'
                        className='w-full p-2 text-sm bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                question: e.target.value
                            }));
                        }}
                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="description" className='text-left block font-medium mb-2'>Enter Answer</label>
                    <input
                        type="text"
                        value={cardData.answer}
                        className='w-full p-2 text-sm bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-50'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                answer: e.target.value
                            }));
                        }}
                    />
                </div>

                <div className='mt-6 flex flex-col justify-start'>
                    <h1 className='text-sm text-left my-1'>Done with the Editing</h1>
                    <button
                        className='bg-white text-slate-950 font-bold py-2 px-4 rounded
                         hover:bg-slate-100 hover:scale-95 duration-200 transition-all'
                        onClick={handleCardEdit}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditForm