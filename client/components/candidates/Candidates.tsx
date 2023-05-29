import { Provider } from 'mobx-react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import CandidatesTable from './CandidatesTable';

import style from './Candidates.module.scss';

function Candidates() {
    const route = useRouter();

    return (
        <section>
            <header className={style.candidatesHeader}>
                <h1>Кандидаты</h1>
                <Button variant="outlined" sx={{ height: '24px' }} onClick={() => route.push('/candidates/new')}>
                    Добавить
                </Button>
            </header>
            <Provider>
                <CandidatesTable />
            </Provider>
        </section>
    );
}

export default Candidates;
