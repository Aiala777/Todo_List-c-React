import React, {useState, ChangeEvent, FormEvent, useEffect}from "react";
// CSS
import styles from "./TaskForm.module.css";

// interface
import { ITask } from "../interface/Task";


interface Props{
    btnText:string
    taskList: ITask[];
    setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    handleUpdate?(id: number, title:string, difficulty: number): void;
}
const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}:Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, SetDifficulty] = useState<number>(0);

    useEffect(() =>{

        if(task){
            setId(task.id);
            setTitle(task.title);
            SetDifficulty(task.difficulty);
        }

    }, [task])

    const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(handleUpdate){
            handleUpdate(id, title, difficulty)

        }else{
            const id = Math.floor(Math.random() * 1000);

            const newtask: ITask = {id, title, difficulty}

            setTaskList!([...taskList, newtask])

            setTitle("");
            SetDifficulty(0);
        }

    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }else {
            SetDifficulty(parseInt(e.target.value))
        }
        

    };

    return(
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="task-title">Título: </label>
            <input type="text" 
            name="title" 
            placeholder="Titulo da tarefa"
            onChange={handleChange}
            value={title}
             />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade: </label>
            <input 
            type="text" 
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            onChange={handleChange}
            value={difficulty}
            />
        </div>
        <input type="submit" value={btnText} />
    </form>
    )
}

export default TaskForm