import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ onLogout }) => {
    const [dashdata, setdashdata] = useState('')

    useEffect(()=> {
        const fetchData = async () => {
            const access_token = localStorage.getItem('access_token');

            try{
                const response = await axios.get('https://day10-backend.onrender.com/users', {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                })
                setdashdata(response.data.message)
            }
            catch(error){
                console.log(error)
            }
        }

        fetchData()
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        onLogout();
    }

    return (
        <>
            <div>
                <h2>Dashboard</h2>
                {dashdata}
                <br />
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </>
    )
}


export default Dashboard;