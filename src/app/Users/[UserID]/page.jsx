import React from 'react';

const UserDetailsPage =async ({params}) => {
    const {UserID}=await params;

    const res =await fetch (`https://jsonplaceholder.typicode.com/users/${UserID}`)
    const user = await res.json();

    return (
        <div>
            <h2>users details page</h2>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
        </div>
    );
};

export default UserDetailsPage;