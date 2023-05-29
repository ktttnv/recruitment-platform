import { useRouter } from 'next/router';
import VacancyProfile from '../../../components/vacancies/VacancyProfile';

export default function VacancyPage() {
    const router = useRouter();

    return <VacancyProfile vacancyId={String(router.query.id)} />;
}
