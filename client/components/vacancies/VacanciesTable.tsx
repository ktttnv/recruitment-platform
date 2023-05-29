import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { observer } from 'mobx-react';

import { VACANCY_INFO_FIELDS } from '../../constants/vacancies';
import { getSkillsNames } from '../../helpers/vacancies';
import useStores from '../../hooks/useStores';
import { getSalaryRange } from '../../helpers/salary';
import { LocationEnum, StatusEnum, Vacancy } from '../../models/Vacancy';
import { useRouter } from 'next/router';

const columns: GridColDef[] = [
    { field: 'title', headerName: VACANCY_INFO_FIELDS.title, width: 130 },
    { field: 'description', headerName: VACANCY_INFO_FIELDS.description, width: 260 },
    { field: 'status', headerName: VACANCY_INFO_FIELDS.status, width: 90 },
    {
        field: 'skills',
        headerName: VACANCY_INFO_FIELDS.skills,
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) => getSkillsNames(params.row._skills).join(', '),
    },
    {
        field: 'salary',
        headerName: VACANCY_INFO_FIELDS.salary,
        valueGetter: (params: GridValueGetterParams) => getSalaryRange(params.row.salary.from, params.row.salary.to),
    },
    {
        field: 'location',
        headerName: VACANCY_INFO_FIELDS.location,
        width: 90,
    },
    {
        field: 'createdDate',
        headerName: VACANCY_INFO_FIELDS.createdDate,
        width: 120,
        valueGetter: (params: GridValueGetterParams) =>
            params.row.createdDate ? params.row.createdDate.substr(0, 10) : '-',
    },
    {
        field: 'deadlineDate',
        headerName: VACANCY_INFO_FIELDS.deadlineDate,
        width: 120,
        valueGetter: (params: GridValueGetterParams) =>
            params.row.deadlineDate ? params.row.deadlineDate.substr(0, 10) : '-',
    },
    {
        field: 'url',
        headerName: VACANCY_INFO_FIELDS.url,
        width: 180,
        valueGetter: (params: GridValueGetterParams) => (params.row.url ? params.row.url.join(',\n') : ''),
    },
];

const VacanciesTable = () => {
    const router = useRouter();

    const { vacancyStore } = useStores() || {};

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        if (vacancyStore) {
            const vacanciesToRows = Object.values(vacancyStore.vacancies).map((vacancy) => {
                const vacancyToRow: Omit<Vacancy, '_id'> & { id: string } = {
                    id: vacancy._id,
                    title: vacancy.title,
                    description: vacancy.description,
                    url: vacancy.url,
                    salary: vacancy.salary,
                    location: vacancy.location as LocationEnum,
                    status: vacancy.status as StatusEnum,
                    createdDate: vacancy.createdDate || null,
                    deadlineDate: vacancy.deadlineDate || null,
                    _skills: [
                        {
                            name: 'Java',
                            description: 'Java lang',
                        },
                        {
                            name: 'Python',
                            description: 'Python lang',
                        },
                    ],
                };
                return vacancyToRow;
            });
            setRows(vacanciesToRows);
        }
    }, [vacancyStore]);

    const onRowClickHandler = React.useCallback((rowId: string) => {
        router.push(`/vacancies/${rowId}`);
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
};

export default observer(VacanciesTable);
