import React, { useEffect, useState } from 'react'
import './Welcomepage.css'
import vec from '../../assets/vec.png'
import vec2 from '../../assets/vec2.png'
import six from '../../assets/six.png'
import nine from '../../assets/nine.png'
import blue from '../../assets/blue.png'
import orange from '../../assets/orange.png'
import blue_4 from '../../assets/blue_4.png'
import InForm from '../InForm'
import FourForm from '../FourForm'

const WelcomePage = () => {
    const [tr, setTr] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [surname, setSurname] = useState('')
    
    function handleChangePassword(psd){
        setPassword(psd)
    }
    function handleChangeEmail(em){
        setEmail(em)
    }
    function handleChangeName(nm){
        setName(nm)
    }
    function handleChangeSurName(srnm){
        setSurname(srnm)
    }

    function onSubmit(e){
        e.preventDefault()
        let arrIn = JSON.parse(localStorage.getItem('usersIn')) || []
        let arrUp = JSON.parse(localStorage.getItem('usersUp')) || []

        let user = {}


        let fm = new FormData(e.target)

        fm.forEach((value, key) => {
            user[key] = value
        });
        
        if(user.name){
            arrUp.push(user)
        }
        if(!user.name){
            arrIn.push(user)
        }
        localStorage.setItem('usersIn', JSON.stringify(arrIn))
        localStorage.setItem('usersUp', JSON.stringify(arrUp))
        window.location.href = 'http://localhost:3000/app'
    }

    return (
        <>
            <div className="left">
                <div className="form">
                    <h2>Welcome!</h2>
                    <form name="regist" onSubmit={onSubmit} >
                        {
                            tr ? <InForm onPassword={handleChangePassword} onEmail={handleChangeEmail} password={password} email={email} /> : <FourForm onPassword={handleChangePassword} onEmail={handleChangeEmail} onSurName={handleChangeSurName} onName={handleChangeName} password={password} email={email} name={name} surname={surname}/>
                        }   
                        <div className="btn">
                            <button onClick={() => setTr(false)}>SIGN UP</button>
                            <button onClick={() => setTr(true)} className='active_btn'>SIGN IN</button>
                        </div>
                    </form>
                    <a href="#">Forgot your password?</a>
                    <img className='images first ' src={blue} alt="" />
                    <img className='images second' src={blue_4} alt="" />
                    <img className='images third' src={orange} alt="" />
                </div>
                <img className="wave" src={vec} alt="" />
                <img className="wave" src={vec2} alt="" />
            </div>
            <div className="right">
                <h1>VALUET</h1>
                <div className="line"></div>
                <span>Your currency dashboard</span>
            </div>
        </>
    )
}

export default WelcomePage
