import * as React from 'react';
import { Autocomplete, Button, FormControl, MenuItem, Switch, TextField } from '@mui/material';
import { VACANCY_INFO_FIELDS } from '../../constants/vacancies';

import style from './CreateCandidate.module.scss';
import useStores from '../../hooks/useStores';
import { useRouter } from 'next/router';
import { ActionStatusEnum, Candidate, SocialNetworkEnum, StatusEnum } from '../../models/Candidate';
import { CANDIDATE_INFO_FIELDS } from '../../constants/candidates';
export default function CreateCandidate() {
    const route = useRouter();

    const { candidateStore } = useStores() || {};

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [patronymic, setPatronymic] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const [photo, setPhoto] = React.useState('');
    const [specialization, setSpecialization] = React.useState('');
    const [startCareerDate, setStartCareerDate] = React.useState('');
    const [skills, setSkills] = React.useState([]);
    const [cvFileName, setCvFileName] = React.useState('');
    const [cvBuffer, setCvBuffer] = React.useState<Buffer>();
    const [lastAction, setLastAction] = React.useState(ActionStatusEnum.FIND);
    const [socialNetworks, setSocialNetworks] = React.useState([]);
    const [status, setStatus] = React.useState(StatusEnum.NOT_SEARCH);

    const onSaveCandidateHandler = React.useCallback(async () => {
        const candidate: Candidate = {
            name,
            surname,
            patronymic,
            email,
            specialization,
            startCareerDate: new Date(startCareerDate),
            _skills: skills,
            lastAction: {
                date: new Date(Date.now()),
                status: lastAction as ActionStatusEnum,
            },
            socialNetworks: [
                {
                    link: 'link',
                    type: SocialNetworkEnum.TELEGRAM,
                },
            ],
            status: {
                type: status as StatusEnum,
                date: new Date(Date.now()),
            },
        };
        const candidateId = await candidateStore.addCandidate(candidate, cvFileName, cvBuffer);
        route.push(`/candidates/${candidateId}`);
    }, [name, surname, patronymic, email, specialization, startCareerDate, skills, lastAction, socialNetworks, status]);

    const handleClick = () => {
        document.getElementById('file-input').click();
    };

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        setCvFileName(file.name);
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            const buffer = Buffer.from(reader.result as ArrayBuffer);
            setCvBuffer(buffer);
        };
    };

    return (
        <section>
            <h1>Добавление кандидата</h1>
            <FormControl sx={{ maxWidth: '600px', display: 'flex', gap: '12px' }}>
                <TextField
                    required
                    id="surname"
                    label={CANDIDATE_INFO_FIELDS.surname}
                    value={surname}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSurname(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="name"
                    label={CANDIDATE_INFO_FIELDS.name}
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="patronymic"
                    label={CANDIDATE_INFO_FIELDS.patronymic}
                    value={patronymic}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPatronymic(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="email"
                    label={CANDIDATE_INFO_FIELDS.email}
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="specialization"
                    label={CANDIDATE_INFO_FIELDS.specialization}
                    value={specialization}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSpecialization(event.target.value);
                    }}
                />
                <TextField
                    required
                    id="startCareerDate"
                    label={CANDIDATE_INFO_FIELDS.startCareerDate}
                    value={startCareerDate}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setStartCareerDate(event.target.value);
                    }}
                />
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
                <TextField
                    id="lastAction"
                    select
                    label={CANDIDATE_INFO_FIELDS.lastAction}
                    value={lastAction}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setLastAction(event.target.value as ActionStatusEnum);
                    }}
                >
                    {Object.keys(ActionStatusEnum).map((optionKey) => (
                        <MenuItem key={optionKey} value={ActionStatusEnum[optionKey]}>
                            {ActionStatusEnum[optionKey]}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    id="socialNetworks"
                    label={CANDIDATE_INFO_FIELDS.socialNetworks}
                    value={socialNetworks}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSocialNetworks([event.target.value]);
                    }}
                />
                <TextField
                    id="status"
                    select
                    label={CANDIDATE_INFO_FIELDS.status}
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

                <div>
                    <button onClick={handleClick}>Select a file</button>
                    <input id="file-input" type="file" onChange={handleFileInput} style={{ display: 'none' }} />
                </div>

                <Button
                    variant="contained"
                    sx={{ width: '120px', marginTop: '16px' }}
                    // TODO: disable when not ready to save
                    disabled={false}
                    onClick={onSaveCandidateHandler}
                >
                    Сохранить
                </Button>
            </FormControl>
        </section>
    );
}

const topSkills = [
    {
        _id: '647126af8a863657b4f90707',
        name: 'AWS',
        description:
            'Amazon Web Services, облачная платформа, используе…ания, управления и масштабирования веб-приложений',
    },
    {
        _id: '647126af8a863657b4f90708',
        name: 'MongoDB',
        description:
            'Популярная NoSQL-база данных, используемая для хра…структурированными и неструктурированными данными',
    },
    {
        _id: '647126af8a863657b4f90709',
        name: 'GraphQL',
        description:
            'Язык запросов для API, разработанный для обеспечен…ее эффективной, мощной и гибкой альтернативы REST',
    },
    {
        _id: '647126af8a863657b4f9070a',
        name: 'Redux',
        description: 'Предсказуемый контейнер состояния для JavaScript-приложений',
    },
    {
        _id: '647126af8a863657b4f90705',
        name: 'Docker',
        description: 'Платформа контейнеризации для развертывания и масштабирования приложений',
    },
    {
        _id: '647126af8a863657b4f90706',
        name: 'Kubernetes',
        description:
            'Открытая система оркестрации контейнеров для автом…ния и управления контейнеризованными приложениями',
    },
    {
        _id: '647126af8a863657b4f90701',
        name: 'JavaScript',
        description: 'Сценарный язык программирования для веб-разработки',
    },
    {
        _id: '647126af8a863657b4f90704',
        name: 'Python',
        description:
            'Универсальный язык программирования, используемый …б-разработки, анализа данных и машинного обучения',
    },
    {
        _id: '647126af8a863657b4f90702',
        name: 'React',
        description: 'Популярная библиотека для создания пользовательских интерфейсов в веб-приложениях',
    },
    {
        _id: '647126af8a863657b4f90703',
        name: 'Node.js',
        description: 'Среда выполнения JavaScript, построенная на движке JavaScript V8 Chrome',
    },
];
