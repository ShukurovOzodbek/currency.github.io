import React from 'react'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import papka from '../../assets/papka.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header_left">
                <img src={search} alt="" />
                <input type="search" />
            </div>
            <div className="header_right">
                <img src={papka} alt="" />
                <img src={bell} alt="" />
            </div>
        </header>
    )
}

export default Header
