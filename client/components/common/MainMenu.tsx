'use client';

import * as React from 'react';
import Image from 'next/image';
import { alpha, CSSObject, useTheme, styled, Theme } from '@mui/material/styles';

import {
    AppBar as MuiAppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer as MuiDrawer,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
    Autocomplete,
    TextField,
} from '@mui/material';

import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Label,
    Menu as MenuIcon,
    Search as SearchIcon,
} from '@mui/icons-material';

import { SITE_NAMING } from '../../constants/common';
import RoutingList from './RoutingList';
import AccountMenu from './UserAvatar';
import useStores from '../../hooks/useStores';
import { useRouter } from 'next/router';

import LogoImage from '../../public/icons/scoop.svg';

const drawerWidth = 180;

interface OpenedState {
    open?: boolean;
}

interface AppBarProps extends MuiAppBarProps, OpenedState {}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

interface WithChildrenProps {
    children?: React.ReactNode;
}

export default function PersistentDrawerLeft({ children }: WithChildrenProps) {
    const router = useRouter();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const { candidateStore } = useStores() || {};

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#003791' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'flex',
                        }}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        <Image src={LogoImage} width={30} height={30} style={{ margin: '2px' }} alt="LogoImage" />
                        {SITE_NAMING}
                    </Typography>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={
                            candidateStore?.candidates
                                ? Object.values(candidateStore?.candidates).map((option) => ({
                                      id: option._id,
                                      label: `${option.surname} ${option.name} ${option.patronymic}`,
                                  }))
                                : []
                        }
                        sx={{ width: '300px' }}
                        onChange={(_, value) => {
                            if (value) {
                                // @ts-ignore
                                router.push(`/candidates/${value.id}`);
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                size="small"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <RoutingList open={open} />
                <Divider />
                <AccountMenu />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
