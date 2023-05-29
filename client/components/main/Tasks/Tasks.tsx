import React, { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import style from './Tasks.module.scss';
import TasksToDoToday from './TasksToDo/TasksToDoToday';
import TasksToDoTomorrow from './TasksToDo/TasksToDoTomorrow';
import useStores from '../../../hooks/useStores';
import { Task } from '../../../models/Task';

export default function Tasks() {
    const { taskStore, userStore } = useStores() || {};

    const [taskToday, setTaskToday] = useState<Task[]>([]);
    const [taskTomorrow, setTaskTomorrow] = useState<Task[]>([]);

    useEffect(() => {
        taskStore?.getTasksRange(userStore?.userId, (new Date(Date.now()).toISOString())).then((resivedTasks) => {
            const [tasksToday, taskTomorrow] = resivedTasks;
            setTaskToday(tasksToday.slice(0, 6));
            setTaskTomorrow(taskTomorrow.slice(6, 10));
        });
    }, [userStore?.userId]);

    return (
        <section className={style.list}>
            <TasksToDoToday tasks={taskToday}/>
            <Calendar />
            <TasksToDoTomorrow tasks={taskTomorrow}/>
        </section>
    );
}
