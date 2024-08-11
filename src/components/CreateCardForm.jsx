import React, { useState } from 'react';

const CreateCardForm = () => {

    const [cardData, setCardData] = useState({
        question: "",
        answer: ""
    });

    const handleSubmitCard = () => {
        console.log(cardData);
    }

    return (
        <div className='py-10 px-6 bg-slate-900 shadow-lg mx-auto rounded-lg min-h-[60vh]'>
            <h1 className='text-white text-left font-bold text-2xl mb-8'>Create a New FlashCard Set</h1>

            <div className='flex flex-col gap-y-6'>
                <div>
                    <label htmlFor="term" className='text-gray-400 font-semibold block mb-2'>Enter Question</label>
                    <input
                        type="text"
                        placeholder='Enter a title like Recursion, Dynamic Programming, Deadlock'
                        className='w-full p-2 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 text-white'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                question: e.target.value
                            }));
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="description" className='text-gray-400 font-semibold block mb-2'>Enter Answer</label>
                    <input
                        type="text"
                        placeholder='Enter description of the above term or answer to the above question...'
                        className='w-full p-2 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 text-white'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                answer: e.target.value
                            }));
                        }}
                    />
                </div>

                <div className='mt-6 flex'>
                    <button
                        className='bg-white text-slate-950 font-bold py-2 px-4 rounded
                         hover:bg-slate-100 hover:scale-95 duration-200 transition-all'
                        onClick={handleSubmitCard}
                    >
                        Submit Flashcard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateCardForm;
