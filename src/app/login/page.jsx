import React from 'react';
import Link from 'next/link';
const LoginPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const login = await res.json();
    return (
        <div>
            <h2>Login</h2>
            <div className='gap-2'>
                {login.map(logindata => 
                    <div key={logindata.id} className="bg-base-100 card-xs shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{logindata.name}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                               <Link href={`/login/${logindata.id}`}>
                                <button className="btn btn-primary">Login Details</button>
                               </Link>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
        </div>
        
    );
};

export default LoginPage; <h2>Login</h2>