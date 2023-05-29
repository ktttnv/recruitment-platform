import TasksToDo from './TasksToDo';

export default function TasksToDoToday({ tasks }) {
    return <TasksToDo title="Сегодня" tasks={tasks} />;
}
