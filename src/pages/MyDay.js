import React, { useContext } from 'react'
import Task from '../component/Task'
import { handleStateGlobally } from '../context/store';

const MyDay = () => {
    const { task } = useContext(handleStateGlobally);
    return (
        <div className='px-2 h-[550px] home overflow-y-scroll'>
            {
                task && task?.map((data, i) => {
                    return <Task key={i} data={data} />;
                })
            }
        </div>
    )
}

export default MyDay
