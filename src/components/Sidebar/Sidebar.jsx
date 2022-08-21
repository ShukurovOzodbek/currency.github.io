import React from 'react'
import './Sidebar.css'
import exchange from '../../assets/exchange.png'
import market from '../../assets/market.png'
import transict from '../../assets/transict.png'
import overview from '../../assets/overview.png'
import wallet from '../../assets/wallet.png'
import cir from '../../assets/cir.png'
import logout from '../../assets/logout.png'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <h2>VALUET</h2>
                    <div className="underline"></div>
                    <div className="center">
                        <ul>
                            <li className='active'><img src={overview} alt="" /> Overview</li>
                            <li><img src={wallet} alt="" /> Wallets</li>
                            <li><img src={transict} alt="" /> Transictions</li>
                            <li><img src={exchange} alt="" /> Exchange</li>
                            <li><img src={market} alt="" /> Market</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="line"></div>
                    <ul>
                        <li><img src={cir} alt="" /> Mike Jackson</li>
                        <li><img src={logout} alt="" /> Log out</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
