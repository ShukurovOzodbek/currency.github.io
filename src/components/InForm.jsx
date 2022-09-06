import React, { useEffect, useState } from 'react'
import axios from '../api/api'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'


const LOGIN_URL = '/auth'

const Login = () => {

    let { setAuth, auth } = useContext(AuthContext)

    let [user, setUser] = useState('')
    let [pwd, setPwd] = useState('')
    let [errMsg, setErrMsg] = useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
                {
                    headers: { "content-type": "application/json" },
                    withCredentials: true
                })

            const accessToken = res?.data?.accessToken
            const roles = res?.data?.roles
            setAuth({ user, pwd, roles, accessToken })
            localStorage.setItem('auth', JSON.stringify(auth))
            
            let authO = JSON.parse(localStorage.getItem('auth'))
            if(authO.accessToken){
                window.location.href = '/app'
            }
            setUser('')
            setPwd('')
            setErrMsg('')
            setSuccess(true)
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