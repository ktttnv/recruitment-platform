import Image from 'next/image';

import { CANDIDATE_INFO_FIELDS } from '../../constants/candidates';

import style from './CandidateProfile.module.scss';
import useStores from '../../hooks/useStores';
import { useEffect, useState } from 'react';
import { Candidate } from '../../models/Candidate';
import { Comment } from '../../models/Comment';
import { getUrlFromBase64 } from '../../utils/photo';
import { ConnectionCommentEntityEnum } from '../../models/Comment';

import cn from 'classnames';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import CommentsComponent from '../common/Comments';
import SkillChip from '../common/SkillChip';
import { getFormatingDate } from '../../utils/date';

const CandidateProfile: React.FC<{ candidateId: string }> = ({ candidateId }) => {
    const router = useRouter();
    const { candidateStore, commentStore } = useStores() || {};

    const [candidateInfo, setCandidateInfo] = useState<Candidate>(null);
    const [comments, setComment] = useState<Comment[]>([]);

    useEffect(() => {
        candidateStore?.getCandidateById(candidateId).then((candidate) => {
            setCandidateInfo(candidate[0]);
        });
        commentStore?.getCommentById(candidateId, ConnectionCommentEntityEnum.CANDIDATE).then((resivedComments) => {
            setComment(resivedComments);
        });
    }, [candidateId]);

    if (!candidateInfo) return <></>;

    return (
        <section>
            <header className={style.profileHeaderWrapper}>
                {candidateInfo.photo ? (
                    <Image
                        className={style.profileImage}
                        loader={({ src }) => (src.startsWith('https') ? src : src.replace('http', 'https'))}
                        src={getUrlFromBase64(candidateInfo.photo)}
                        alt="Candidate image"
                        width={150}
                        height={150}
                    />
                ) : (
                    <div className={cn(style.squareImage, style.profileImage)} />
                )}

                <h1 className={style.candidateName}>
                    <span>{candidateInfo.surname}</span>
                    <span>{candidateInfo.name}</span>
                    <span>{candidateInfo.patronymic}</span>
                </h1>
            </header>

            <Button
                variant="outlined"
                sx={{ height: '24px', width: '140px', marginTop: '16px' }}
                onClick={() => router.push(`/candidates/${candidateId}/edit`)}
            >
                Редактировать
            </Button>

            <ul className={style.candidateInfo}>
                <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS.specialization}: </div>
                    <div className={style.value}>{candidateInfo.specialization}</div>
                </li>
                <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS.years_experience}: </div>
                    <div className={style.value}>
                        {candidateInfo.startCareerDate
                            ? getFormatingDate(candidateInfo.startCareerDate.toString())
                            : ''}
                    </div>
                </li>
                <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS._skills}: </div>
                    <div className={style.value}>
                        {candidateInfo._skills.map((skill) => {
                            return <SkillChip skill={skill} />;
                        })}
                    </div>
                </li>
                <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS.cvLink}: </div>
                    <div className={style.value}>{candidateInfo.cvExt}</div>
                </li>
                {/* <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS.last_action_date}: </div>
                    <div className={style.value}>{candidateInfo.lastAction.date}</div>
                </li> */}
                <li>
                    <div className={style.prop}>{CANDIDATE_INFO_FIELDS.status}: </div>
                    <div className={style.value}>{candidateInfo.status.type}</div>
                </li>
            </ul>
            {comments && <CommentsComponent comments={comments}></CommentsComponent>}
        </section>
    );
};

export default CandidateProfile;
