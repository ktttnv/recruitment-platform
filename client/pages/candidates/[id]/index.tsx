import { useRouter } from 'next/router';
import CandidateProfile from '../../../components/candidates/CandidateProfile';

export default function CandidatePage() {
    const router = useRouter();

    return <CandidateProfile candidateId={String(router.query.id)} />;
}
