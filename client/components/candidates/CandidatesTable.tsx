import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CANDIDATE_INFO_FIELDS } from '../../constants/candidates';
import useStores from '../../hooks/useStores';
import { CandidateInfo } from '../../types/candidates';
import { useRouter } from 'next/router';

const columns: GridColDef[] = [
    { field: 'name', headerName: CANDIDATE_INFO_FIELDS.name, width: 260 },
    { field: 'specialization', headerName: CANDIDATE_INFO_FIELDS.specialization, width: 260 },
    { field: 'years_experience', headerName: CANDIDATE_INFO_FIELDS.years_experience, width: 90 },
    { field: 'skills', headerName: CANDIDATE_INFO_FIELDS._skills, width: 320 },
    { field: 'CV_link', headerName: CANDIDATE_INFO_FIELDS.CV_link, width: 130 },
    { field: 'last_action_date', headerName: CANDIDATE_INFO_FIELDS.last_action_date, width: 130 },
    { field: 'status', headerName: CANDIDATE_INFO_FIELDS.status, width: 180 },
];

export default function CandidatesTable() {
    const router = useRouter();
    const { candidateStore } = useStores() || {};

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        if (candidateStore) {
            const candidatesToRows = Object.values(candidateStore.candidates).map((candidate) => {
                const candidateToRow: CandidateInfo = {
                    id: candidate._id,
                    name: `${candidate.surname} ${candidate.name} ${candidate.patronymic}`,
                    specialization: candidate.specialization,
                    years_experience: 5,
                    skills: candidate._skills.map((item) => item.name).join(', '),
                    CV_link: candidate.cvExt,
                };
                return candidateToRow;
            });
            setRows(candidatesToRows);
        }
    }, [candidateStore]);

    const onRowClickHandler = React.useCallback((rowId: string) => {
        router.push(`/candidates/${rowId}`);
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 50]}
                checkboxSelection
                // @ts-ignore
                onRowClick={(params) => onRowClickHandler(params.id)}
            />
        </div>
    );
}
