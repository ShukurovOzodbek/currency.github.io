import React from 'react'
import './Welcomepage.css'
import vec from '../../assets/vec.png'
import vec2 from '../../assets/vec2.png'
import six from '../../assets/six.png'
import nine from '../../assets/nine.png'
import blue from '../../assets/blue.png'
import orange from '../../assets/orange.png'
import blue_4 from '../../assets/blue_4.png'

const WelcomePage = () => {
    return (
        <>
            <div className="left">
                <div className="form">
                    <h2>Welcome!</h2>
                    <form name="regist" action="#">
                        <div className="input">
                            <div className="image">
                                <img src={nine} alt="" />
                            </div>
                            <input placeholder='Email or Login' type="text" />
                        </div>
                        <div className="input">
                            <img className='img' src={six} alt="" />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className="btn">
                            <button>SIGN IN</button>
                            <button className='active_btn'><a style={{color: 'white', textDecoration: 'none'}} href="/app">SIGN IN</a></button>
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
