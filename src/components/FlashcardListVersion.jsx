
import React, { useState } from 'react';
import './flashCard.css';
import { MdDelete } from "react-icons/md";
import EditForm from './EditForm';

const FlashcardListVersion = ({ cardID, title, description, handleDelete }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (
        <li className='bg-slate-800 rounded-lg shadow-lg p-4 flex justify-between items-center
            my-2'>
            {
                isEditing && <EditForm cardTitle={title} cardDescription={description} cardId={cardID} handleToggleEdit={handleToggleEdit} />
            }

            <div className='text-left'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-gray-400'>Description: {description}</p>
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
                    onClick={() => { handleDelete(cardID) }}
                >
                    <MdDelete className='m-[2px]' />
                    Delete
                </button>
            </div>

        </li>
    );
};

export default FlashcardListVersion;
