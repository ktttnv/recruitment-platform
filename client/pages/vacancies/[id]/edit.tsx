import * as React from 'react';
import { useRouter } from 'next/router';
import EditVacancy from '../../../components/vacancies/EditVacancy';

export default function EditVacancyPage() {
    const router = useRouter();

    return (
        <>
            <EditVacancy vacancyId={String(router.query.id)} />
        </>
    );
}
