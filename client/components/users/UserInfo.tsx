import * as React from 'react';
import useStores from '../../hooks/useStores';

export default function UserInfo() {
    const { userStore } = useStores() || {};

    // userStore.getUsers().then((users) => {    console.log(users);    })

    return <section></section>;
}
