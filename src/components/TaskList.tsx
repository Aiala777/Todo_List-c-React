import React from "react";
import styles from "./Header.module.css";


// interfaces 
import { ITask } from "../interface/Task";


// css
import style from "./TaskList.module.css"

interface Props{
    taskList:ITask[];
    handleDelete(id:number):void;
    handleedit(task: ITask):void;

}

const TaskList = ({taskList, handleDelete, handleedit}: Props)=>{

    return(
        <>
            {taskList.length > 0 ?(
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className="bi bi-pencil" onClick={() => handleedit(task)}></i>
                            <i className="bi bi-trash" onClick={() => {
                                handleDelete(task.id);
                            }}></i>
                        </div>
                        
                    </div>
                    
                ))
            ) : (
                <p>Não há tarefas cadastradas</p>
            )}
        </>
    )
}

export default TaskList