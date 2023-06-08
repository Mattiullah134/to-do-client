import axios from "axios";
import moment from "moment";
import { createContext, useEffect, useState } from "react";

export const handleStateGlobally = createContext();

const HandleState = ({ children }) => {
    const getUserTodo = async () => {
        try {


            const { data } = await axios.get(`http://localhost:8000/user/todo/`);
            setTask(data.data);
            setPlanedTask(data.data.filter(data => {
                return moment(data.date).isAfter(moment());
            }));
            setImportantTask(data.data.filter(data => {
                return data.isImportant;
            }))
            setCompletedTask(data.data.filter(data => {
                return data.isCompleted;
            }))
            return data
        } catch (error) {
            console.log(error);
        }
    }
    const [task, setTask] = useState([]);
    const [planedTask, setPlanedTask] = useState([]);
    const [importantTask, setImportantTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    useEffect(() => {
        getUserTodo();
    }, [])

    return (
        <handleStateGlobally.Provider value={{ task, setTask, planedTask, importantTask, completedTask,  }}>
            {children}
        </handleStateGlobally.Provider>
    )
}
export default HandleState;

