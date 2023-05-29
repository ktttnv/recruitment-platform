'use client';

import * as React from 'react';
import Image from 'next/image';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';

import { useRouter } from 'next/router';

import MainPageIcon from '../../public/icons/menu/mainPage.svg';
import CandidatesPageIcon from '../../public/icons/menu/candidatesPage.svg';
import VacanciesPageIcon from '../../public/icons/menu/vacanciesPage.svg';
import SearchPageIcon from '../../public/icons/menu/searchPage.svg';
import AnalyticsPageIcon from '../../public/icons/menu/analyticsPage.svg';
import CommentsPageIcon from '../../public/icons/menu/commentsPage.svg';
import TemplatesPageIcon from '../../public/icons/menu/templatesPage.svg';

type routeInfo = {
    text: string;
    href: string;
    icon: any;
};

const ROUTES: Array<routeInfo> = [
    {
        text: 'Главная',
        href: '/',
        icon: MainPageIcon,
    },
    {
        text: 'Кандидаты',
        href: '/candidates',
        icon: CandidatesPageIcon,
    },
    {
        text: 'Вакансии',
        href: '/vacancies',
        icon: VacanciesPageIcon,
    },
    {
        text: 'Поиск',
        href: '/search',
        icon: SearchPageIcon,
    },
    {
        text: 'Коментарии',
        href: '/comments',
        icon: CommentsPageIcon,
    },
    {
        text: 'Шаблоны',
        href: '/templates',
        icon: TemplatesPageIcon,
    },
    {
        text: 'Аналитика',
        href: '/analytics',
        icon: AnalyticsPageIcon,
    },
];

export default function RoutingList({ open }) {
    const route = useRouter();

    return (
        <List>
            {ROUTES.map((routeItem) => (
                <ListItem key={routeItem.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={() => route.push(routeItem.href)}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <Tooltip title={routeItem.text} placement="right">
                                <Image src={routeItem.icon} alt="Main page icon" width={30} height={30} />
                            </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={routeItem.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
