import { VACANCY_INFO_FIELDS } from '../../constants/vacancies';

import style from './VacancyProfile.module.scss';
import { Vacancy } from '../../models/Vacancy';
import { Comment } from '../../models/Comment';
import useStores from '../../hooks/useStores';
import { useEffect, useState } from 'react';
import { ConnectionCommentEntityEnum } from '../../models/Comment';
import CommentsComponent from '../common/Comments';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const VacancyProfile: React.FC<{ vacancyId: string }> = ({ vacancyId }) => {
    const router = useRouter();

    const { vacancyStore, commentStore } = useStores() || {};

    const [vacancyInfo, setVacancyInfo] = useState<Vacancy>(null);
    const [comments, setComment] = useState<Comment[]>([]);

    useEffect(() => {
        vacancyStore?.getVacancyById(vacancyId).then((vacancy) => {
            setVacancyInfo(vacancy[0]);
        });
        commentStore?.getCommentById(vacancyId, ConnectionCommentEntityEnum.VACANCY).then((resivedComments) => {
            setComment(resivedComments);
        });
    }, [vacancyId]);

    if (!vacancyInfo) return <></>;

    return (
        <section>
            <h1>{vacancyInfo.title}</h1>

            <Button
                variant="outlined"
                sx={{ height: '24px', width: '140px', marginTop: '16px' }}
                onClick={() => router.push(`/vacancies/${vacancyId}/edit`)}
            >
                Редактировать
            </Button>

            <ul className={style.vacancyInfo}>
                <li>
                    <div className={style.prop}>{VACANCY_INFO_FIELDS.description}: </div>
                    <div className={style.value}>{vacancyInfo.description}</div>
                </li>
                <li>
                    <div className={style.prop}>{VACANCY_INFO_FIELDS.status}: </div>
                    <div className={style.value}>{vacancyInfo.status}</div>
                </li>
                <li>
                    <div className={style.prop}>{VACANCY_INFO_FIELDS.skills}: </div>
                    <div className={style.value}>{vacancyInfo._skills.map((skill) => skill.name).join(', ')}</div>
                </li>
            </ul>
            {comments && <CommentsComponent comments={comments}></CommentsComponent>}
        </section>
    );
};

export default VacancyProfile;
