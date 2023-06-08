import React from 'react'
import moment from 'moment/moment'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import completion from "../audio/completion.mp3";
import CheckIcon from '@mui/icons-material/Check';
const Task = ({ data }) => {
    const handleRadioButton = async (e) => {
        try {
            if (!data.isCompleted) {

                data.isCompleted = true;
                const handleComplete = await axios.put(`http://localhost:8000/user/todo/edit/${data._id}`, data);
                if (handleComplete.data.success) {
                    toast(handleComplete.data.message);
                    const audio = new Audio(completion);
                    audio.play();
                    setTimeout(() => {

                        window.location.reload(true);
                    }, 1000);
                }
            }

        } catch (error) {
            toast.error(error)
        }
    }
    const handleFavourite = async (e) => {
        try {
            if (!data.isCompleted) {
                data.isImportant = true;
                const handleComplete = await axios.put(`http://localhost:8000/user/todo/edit/${data._id}`, data);
                if (handleComplete.data.success) {
                    toast("Add to the important");
                    setTimeout(() => {

                        window.location.reload(true);
                    }, 1000);
                }
            }
        } catch (error) {
            toast.error(error)
        }
    }
    const handleDelete = async (e) => {
        try {


            const handleComplete = await axios.delete(`http://localhost:8000/user/todo/delete/${data._id}`, data);
            if (handleComplete.data.success) {
                toast(handleComplete.data.message);
                setTimeout(() => {

                    window.location.reload(true);
                }, 1000);

            }

        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <>
            <ToastContainer />

            <div className='flex items-center justify-between px-5 py-2 shadow-md '>
                <div onDoubleClick={(e) => handleDelete(e)} className='flex gap-6 items-center cursor-pointer'>

                    <div>
                        <input id="link-radio" type="radio" defaultChecked={data.isCompleted} onChange={(e) => handleRadioButton(e)} value={true} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                        />

                    </div>
                    <div className='flex flex-col'>
                        <div >
                            <input type="text" defaultValue={data.title} className='outline-none border-none' />
                        </div>
                        <div className='text-gray-500'>
                            {moment(data.date).add(1, 'year').format('LL')}
                        </div>
                    </div>
                </div>
                <div>
                    <svg onClick={(e) => handleFavourite(e)} aria-hidden="true" className="w-5 h-5 cursor-pointer text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                    {data.isCompleted && <span class=" text-green-900 h-20 w-20 text-sm font-small mr-2  rounded-full "><CheckIcon /></span>}

                </div>
            </div>
        </>

    )
}

export default Task
