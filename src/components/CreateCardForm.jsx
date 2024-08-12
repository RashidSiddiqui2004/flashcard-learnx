import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const CreateCardForm = () => {

    const [cardData, setCardData] = useState({
        title: "",
        description: ""
    });

    const handleSubmitCard = () => {

        if (cardData.title === "" || cardData.description === "") {
            toast.info("Pls provide title and description of the flashcard");
            return;
        }
        axios.post(`${backendURL}/api/cards/addFlashCard`, cardData)
            .then(response => {
                setCardData({ title: "", description: "" })
                toast.success("Created FlashCard successfully!");
            })
            .catch(error => console.error('Error fetching users:', error));
    }

    return (
        <div className='mx-8 my-8 py-10 px-6 bg-slate-900 shadow-lg rounded-lg min-h-[60vh]'>

            <ToastContainer />
            <h1 className='text-white text-left font-bold text-2xl mb-8'>Create a New FlashCard Set</h1>

            <div className='flex flex-col gap-y-6'>
                <div>
                    <label htmlFor="term" className='text-gray-400 font-semibold block mb-2 text-left'>Enter Question</label>
                    <input
                        type="text"
                        value={cardData.title}
                        placeholder='Enter a CS term like Recursion, Dynamic Programming, Deadlock...'
                        className='w-full p-2 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 text-white'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                title: e.target.value
                            }));
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="description" className='text-gray-400 font-semibold block mb-2 text-left'>Enter Answer</label>
                    <input
                        type="text"
                        value={cardData.description}
                        placeholder='Enter description of the above term...'
                        className='w-full p-2 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 text-white'
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                description: e.target.value
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
