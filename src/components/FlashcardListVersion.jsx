
import React, { useState } from 'react';
import './FlashCard.css';
import { MdDelete } from "react-icons/md";
import EditForm from './EditForm';

// import { FcIdea } from "react-icons/fc"; 

const FlashcardListVersion = ({ id, question, answer, handleDelete }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (
        <li className='bg-slate-800 rounded-lg shadow-lg p-4 flex justify-between items-center
            my-2'>
            {
                isEditing && <EditForm cardQuestion={question} cardAnswer={answer} cardId={id} handleToggleEdit={handleToggleEdit} />
            }

            <div className='text-left'>
                <h2 className='text-xl font-semibold'>{question}</h2>
                <p className='text-gray-400'>Answer: {answer}</p>
            </div>
            <div className='flex space-x-4'>
                <button
                    className='text-blue-500 hover:text-blue-300'
                    onClick={() => setIsEditing(!isEditing)}
                >
                    Edit
                </button>
                <button
                    className='text-red-500 hover:text-red-300 flex'
                    onClick={() => handleDelete(id)}
                >
                    <MdDelete className='m-[2px]' />
                    Delete
                </button>
            </div>

        </li>
    );
};

export default FlashcardListVersion;
