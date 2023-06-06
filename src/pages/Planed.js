import Task from '../component/Task';
import React, { useContext } from 'react'
import { handleStateGlobally } from '../context/store';
const Planed = () => {
    const { planedTask } = useContext(handleStateGlobally);
    return (
        <div className='px-2 h-[550px] home overflow-y-scroll'>
            {
                planedTask && planedTask?.map((data, i) => {
                    return <Task key={i} data={data} />;
                })
            }
        </div>
    )
}

export default Planed
