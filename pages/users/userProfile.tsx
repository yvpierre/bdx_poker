

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function User() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <div>
                {/* @ts-ignore */}
                <img src={user.picture} alt={user.name} />
                <h2>nom : {user.name}</h2>
                <p>email : {user.email}</p>
                <p>org id : {user.org_id}</p>
                <p>email verified : {user.email_verified}</p>
                <p>updated at : {user.updated_at}</p>
                <p>nickname : {user.nickname}</p>
                <p>sub : {user.sub}</p>


            </div>
        )
    );
}