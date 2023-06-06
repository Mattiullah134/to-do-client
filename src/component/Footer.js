import React, { useCallback, useContext, useState } from 'react'
import { handleStateGlobally } from '../context/store'
import axios from 'axios';
const Footer = () => {
    const { setTask } = useContext(handleStateGlobally);
    const [userTask, setUserTask] = useState({
        title: '',
        date: ''
    });
    const handleChange = (e) => {
        if (e.target.name === "inputtask") {

            setUserTask((prev) => ({ ...prev, title: e.target.value }));
        }
        else if (e.target.name === "taskdate") {

            setUserTask((prev) => ({ ...prev, date: e.target.value }))
        }
    }
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        console.log(userTask);
        try {
            const { data } = await axios.post(`http://localhost:8000/user/todo/add`, userTask);
            console.log(data);
        } catch (error) {

        }
        // setUserTask({
        //     title: '',
        //     date: ''
        // });
    },
        [userTask],
    )

    return (
        <div className='absolute bottom-0 w-full p-2' >
            <form onSubmit={handleSubmit}>

                <div className="relative">

                    <input type="input" name="inputtask" value={userTask.title} onChange={handleChange} id="inputtask" className="block w-full p-4 pl-10 text-sm  border outline-none border-gray-300 rounded-lg bg-gray-800 placeholder-gray-400 text-white  " placeholder="Add Task" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 font-medium outline-none rounded-lg text-sm px-4 py-2 ">Add</button>
                    <input onChange={handleChange} value={userTask.date} type="date" id="birthday" name="taskdate" className="text-white absolute right-20 bottom-2 bg-gray-500 outline-none hover:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2 " required />
                </div>
            </form>
        </div>
    )
}

export default Footer
