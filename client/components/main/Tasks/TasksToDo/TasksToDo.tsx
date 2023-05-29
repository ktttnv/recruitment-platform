import React, { useEffect, useState } from 'react';
import Task from './Task';
import { Task as TaskType } from '../../../../models/Task';

import style from './TasksToDo.module.scss';

const TasksToDo = ({ title, tasks }) => {

    return (
        <section className={style.toDoWrapper}>
            <header className={style.toDoHeader}>
                <p className={style.toDoHeading}>{title}</p>
            </header>
            <main>
                <ul className={style.toDoList}>
                    {
                        tasks?.map((task) => {
                            return (
                                <li>
                                    <Task task={task}/>
                                </li>
                            );
                        })
                    }
                </ul>
            </main>
        </section>
    );
};

export default TasksToDo;
