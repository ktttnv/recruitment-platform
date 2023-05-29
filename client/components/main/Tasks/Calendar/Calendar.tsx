import style from './Calendar.module.scss';

export default function Calendar() {
    return <div className={style.calendarWrapper}>
        <header className={style.toDoHeader}>
                <p className={style.toDoHeading}>{'Календарь'}</p>
        </header>
    </div>;
}
