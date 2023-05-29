import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import style from './TasksToDo.module.scss';
import { Task } from '../../../../models/Task';

const TaskComponent = ({ task }) => {
    return (
        <Card className={style.taskWrapper}>
            <CardContent>
                <FormControlLabel control={<Checkbox checked={task.isDone}/>} label={task.text} />
            </CardContent>
        </Card>
    );
};

export default TaskComponent;
