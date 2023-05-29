import { Provider } from 'mobx-react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import VacanciesTable from './VacanciesTable';

import style from './Vacancies.module.scss';

function Vacancies() {
    const route = useRouter();

    return (
        <section>
            <header className={style.vacanciesHeader}>
                <h1>Вакансии</h1>
                <Button variant="outlined" sx={{ height: '24px' }} onClick={() => route.push('/vacancies/new')}>
                    Создать
                </Button>
            </header>
            <Provider>
                <VacanciesTable />
            </Provider>
        </section>
    );
}

export default Vacancies;
