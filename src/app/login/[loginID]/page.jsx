import React from 'react';

const LoginIDPage = async({params}) => {
const {loginID}=await params;
const res= await fetch (`https://jsonplaceholder.typicode.com/users/${loginID}`)
const login=await res.json();
    return (
        <div>
            <h2>Name:{login.name}</h2>
            <p>City:{login.address.city}</p>
        </div>
    );
};

export default LoginIDPage;