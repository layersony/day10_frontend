import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://day10-backend.onrender.com/login', {username, password})
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);
            onLogin();
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    
                    <input 
                        type="text" 
                        placeholder='username'
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <br />
                    <input 
                        type="password" 
                        placeholder='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )


}

export default LoginForm;