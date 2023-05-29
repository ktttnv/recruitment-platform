import * as React from 'react';
import { Autocomplete, Button, FormControl, MenuItem, Switch, TextField } from '@mui/material';
import { VACANCY_INFO_FIELDS } from '../../constants/vacancies';
import { LocationEnum, StatusEnum, Vacancy } from '../../models/Vacancy';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

import style from './CreateVacancy.module.scss';
import useStores from '../../hooks/useStores';
import { useRouter } from 'next/router';
// import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
// import dayjs from 'dayjs';

const EditVacancy: React.FC<{ vacancyId: string }> = ({ vacancyId }) => {
    const route = useRouter();
    // const [hasDeadline, setHasDeadline] = React.useState(false);
    // const [deadlineDate, setDeadlineDate] = React.useState(null);
    // const onSwitchHasDeadline = React.useCallback(() => {
    //     setHasDeadline(!hasDeadline);
    // }, [hasDeadline]);

    const { skillStore, vacancyStore } = useStores() || {};

    const [topSkills, setTopSkills] = React.useState([]);

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [salaryFrom, setSalaryFrom] = React.useState(0);
    const [salaryTo, setSalaryTo] = React.useState(0);
    const [location, setLocation] = React.useState(LocationEnum.REMOTE);
    const [status, setStatus] = React.useState(StatusEnum.OPENED);
    const [skills, setSkills] = React.useState([]);

    React.useEffect(() => {
        vacancyStore?.getVacancyById(vacancyId).then((vacancies) => {
            const vacancyInfo = vacancies[0];
            setTitle(vacancyInfo.title);
            setDescription(vacancyInfo.description);
            setSalaryFrom(vacancyInfo.salary.from);
            setSalaryTo(vacancyInfo.salary.to);
            setLocation(vacancyInfo.location);
            setStatus(vacancyInfo.status);
            setSkills(vacancyInfo._skills);
        });

        skillStore?.getSkills().then((skills) => {
            setTopSkills(skills);
        });
    }, []);

    const onSaveVacancyHandler = React.useCallback(async () => {
        const vacancy: Vacancy = {
            title,
            description,
            salary: {
                from: salaryFrom,
                to: salaryTo,
            },
            location,
            status,
            _skills: skills,
        };
        const vacancyId = await vacancyStore.addVacancy(vacancy);
        route.push(`/vacancies/${vacancyId}`);
    }, [title, description, salaryFrom, salaryTo, location, status, skills]);

    return (
        <section>
            <h1>Редактирование вакансии</h1>
            <FormControl sx={{ maxWidth: '600px', display: 'flex', gap: '12px' }}>
                <TextField
                    required
                    id="title"
                    label={VACANCY_INFO_FIELDS.title}
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="description"
                    label={VACANCY_INFO_FIELDS.description}
                    value={description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDescription(event.target.value);
                    }}
                />
                <section className={style.salaryWrapper}>
                    <TextField
                        required
                        id="salary-from"
                        label={'От'}
                        value={salaryFrom}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setSalaryFrom(Number(event.target.value));
                        }}
                    />
                    <TextField
                        required
                        id="salary-to"
                        label={'До'}
                        value={salaryTo}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setSalaryTo(Number(event.target.value));
                        }}
                    />
                    <p>рублей</p>
                </section>
                <TextField
                    id="location"
                    select
                    label="Локация"
                    value={location}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setLocation(event.target.value as LocationEnum);
                    }}
                >
                    {Object.keys(LocationEnum).map((optionKey) => (
                        <MenuItem key={optionKey} value={LocationEnum[optionKey]}>
                            {LocationEnum[optionKey]}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="status"
                    select
                    label="Статус"
                    value={status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setStatus(event.target.value as StatusEnum);
                    }}
                >
                    {Object.keys(StatusEnum).map((optionKey) => (
                        <MenuItem key={optionKey} value={StatusEnum[optionKey]}>
                            {StatusEnum[optionKey]}
                        </MenuItem>
                    ))}
                </TextField>

                {/* <section className={style.deadlineSwitchWrapper}>
                    <p>Есть дедлайн?</p>

                    <Switch
                        checked={hasDeadline}
                        onChange={onSwitchHasDeadline}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </section>

                {hasDeadline &&
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DateField
                            id="deadline"
                            name="deadline"
                            label="Дедлайн"
                            value={deadlineDate}
                            onChange={(newValue) => setDeadlineDate(newValue)}
                            {...register("deadline")}
                        />
                    </LocalizationProvider>
                } */}

                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={topSkills}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) => option._id === value._id}
                    filterSelectedOptions
                    value={skills}
                    onChange={(_: React.ChangeEvent<HTMLInputElement>, values) => {
                        setSkills(values);
                    }}
                    renderInput={(params) => <TextField {...params} label="Навыки" placeholder="Ещё..." />}
                />

                <Button
                    variant="contained"
                    sx={{ width: '120px', marginTop: '16px' }}
                    // TODO: disable when not ready to save
                    disabled={false}
                    onClick={onSaveVacancyHandler}
                >
                    Сохранить
                </Button>
            </FormControl>
        </section>
    );
};

export default EditVacancy;
