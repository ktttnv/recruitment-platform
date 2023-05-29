import * as React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import useStores from '../../hooks/useStores';
import { getUrlFromBase64 } from '../../utils/photo';

export default function UserAvatar() {
    const { userStore } = useStores() || {};

    return (
        <Box sx={{ display: 'flex', alignItems: 'end', textAlign: 'center', height: '100%' }}>
            <Tooltip title="Мой аккаунт">
                <IconButton size="small" sx={{ ml: 2, mb: 2 }} aria-haspopup="true">
                    {userStore?.user?.photo ? (
                        <Image
                            loader={({ src }) => (src.startsWith('https') ? src : src.replace('http', 'https'))}
                            src={getUrlFromBase64(userStore.user.photo)}
                            alt={userStore.user.name}
                            width={32}
                            height={32}
                            style={{borderRadius: '50%'}}
                        />
                    ) : (
                        <Avatar sx={{ width: 32, height: 32, background: '#003791' }}>M</Avatar>
                    )}
                </IconButton>
            </Tooltip>
        </Box>
    );
}
