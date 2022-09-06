import React from 'react'
import './Welcomepage.css'
import vec from '../../assets/vec.png'
import vec2 from '../../assets/vec2.png'
import blue from '../../assets/blue.png'
import orange from '../../assets/orange.png'
import blue_4 from '../../assets/blue_4.png'
import InForm from '../InForm'

const WelcomePage = () => {

    return (
        <>
            <div className="left">
                <div className="form">
                    <InForm />
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
