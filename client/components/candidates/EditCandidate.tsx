import * as React from 'react';
import { Autocomplete, Button, FormControl, MenuItem, Switch, TextField } from '@mui/material';

import style from './CreateCandidate.module.scss';
import useStores from '../../hooks/useStores';
import { useRouter } from 'next/router';
import { ActionStatusEnum, Candidate, SocialNetworkEnum, StatusEnum } from '../../models/Candidate';
import { CANDIDATE_INFO_FIELDS } from '../../constants/candidates';

const EditCandidate: React.FC<{ candidateId: string }> = ({ candidateId }) => {
    const route = useRouter();

    const { candidateStore, skillStore } = useStores() || {};

    const [topSkills, setTopSkills] = React.useState([]);

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [patronymic, setPatronymic] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const [specialization, setSpecialization] = React.useState('');
    const [startCareerDate, setStartCareerDate] = React.useState('');
    const [skills, setSkills] = React.useState([]);
    const [lastAction, setLastAction] = React.useState(ActionStatusEnum.FIND);
    const [socialNetworks, setSocialNetworks] = React.useState([]);
    const [status, setStatus] = React.useState(StatusEnum.NOT_SEARCH);

    React.useEffect(() => {
        candidateStore?.getCandidateById(candidateId).then((candidates) => {
            const candidateInfo = candidates[0];
            setName(candidateInfo.name);
            setSurname(candidateInfo.surname);
            setPatronymic(candidateInfo.patronymic);
            setEmail(candidateInfo.email);
            setPhoto(candidateInfo.photo);
            setSpecialization(candidateInfo.specialization);
            setStartCareerDate(candidateInfo.startCareerDate);
            setSkills(candidateInfo._skills);
            setLastAction(candidateInfo.lastAction?.status);
            setSocialNetworks(candidateInfo.socialNetworks);
            setStatus(candidateInfo.status?.type);
        });

        skillStore?.getSkills().then((skills) => {
            setTopSkills(skills);
        });
    }, []);

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
        await candidateStore.updateCandidateById(candidateId, candidate);
        route.push(`/candidates/${candidateId}`);
    }, [name, surname, patronymic, email, specialization, startCareerDate, skills, lastAction, socialNetworks, status]);

    const handleClick = () => {
        document.getElementById('file-input').click();
    };

    const handleFileInput = (event) => {
        let cvFileName: string, cvBuffer: Buffer;
        const file = event.target.files[0];
        cvFileName = file.name;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            const buffer = Buffer.from(reader.result as ArrayBuffer);
            cvBuffer = buffer;
        };

        candidateStore.updateCVCandidateById(candidateId, cvFileName, cvBuffer);
    };

    return (
        <section>
            <h1>Редактирование страницы кандидата</h1>
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
                    isOptionEqualToValue={(option, value) => {
                        console.log('hello there', option);
                        return option._id === value._id;
                    }}
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
};

export default EditCandidate;
