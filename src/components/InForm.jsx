import React, { useState } from 'react'
import axios from '../api/api'
import { Button } from '@mui/material'

const LOGIN_URL = '/auth'

const Login = () => {

    let [user, setUser] = useState('')
    let [pwd, setPwd] = useState('')
    let [errMsg, setErrMsg] = useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
                {
                    headers: { "content-type": "application/json" },
                    withCredentials: true
                })

            setUser('')
            setPwd('')
            setSuccess(true)
            console.log(success);
            window.location.href = 'http://localhost:3000/app'
        } catch (err) {
            if (!err.response) {
                setErrMsg('No server response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login failed')
            }
        }
    }

    return (
        <>
            <form style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '200px auto',
                gap: '15px'
            }} onSubmit={handleSubmit}>
                <h2 style={{ color: 'red' }}>{errMsg}</h2>
                <h2 variant='h2'>Log in</h2>
                <input placeholder='Username' type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                <input placeholder='Password' type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <Button type='submit' sx={{ width: '30%' }} variant='contained'>Send</Button>
            </form>
        </>
    )
}

export default Login