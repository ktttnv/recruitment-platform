import * as React from 'react';
import EditCandidate from '../../../components/candidates/EditCandidate';
import { useRouter } from 'next/router';

export default function EditCandidatePage() {
    const router = useRouter();

    return (
        <>
            <EditCandidate candidateId={String(router.query.id)} />
        </>
    );
}
