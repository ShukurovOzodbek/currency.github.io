import React, { useState } from 'react'
import six from '../assets/six.png'
import nine from '../assets/nine.png'

const InForm = ({onPassword, onEmail , password, email}) => {

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
        </>
    )
}

export default InForm
