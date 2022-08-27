import React from 'react'
import six from '../assets/six.png'
import nine from '../assets/nine.png'

const FourForm = ({name, surname, email, password, onName, onSurName, onEmail, onPassword}) => {
    return (
        <>
            <div className="input">
                <div className="image imagesli">
                    <img src={nine} alt="" />
                </div>
                <input required name='email' defaultValue={email}  placeholder='Email or Login' onChange={(e) => onEmail(e.target.value)} type="email" />
            </div>
            <div className="input">
                <img className='img' src={six} alt="" />
                <input required name='password' type="password" defaultValue={password} onChange={(e) => onPassword(e.target.value)} placeholder='Password' />
            </div>
            <div className="input">
                <img className='img' src={six} alt="" />
                <input required name='name' type="text" defaultValue={name} onChange={(e) => onName(e.target.value)} placeholder='Name' />
            </div>
            <div className="input">
                <img className='img' src={six} alt="" />
                <input required name='surname' type="text" defaultValue={surname} onChange={(e) => onSurName(e.target.value)} placeholder='Surname' />
            </div>
        </>
    )
}

export default FourForm
