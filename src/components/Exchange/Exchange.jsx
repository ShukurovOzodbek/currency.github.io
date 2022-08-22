import React from 'react'
import bitcoin_icon from '../../assets/bitcoin_icon.png'
import './Exchange.css'

const Exchange = () => {
    return (
        <div className="exchange">
            <h4>Exchange</h4>
            <div className="currency">
                <div className="from">
                    <span>From</span>
                    <div className="sel">
                        <select value='Ethereum'>
                            <option value="Ethereum">Ethereum</option>
                            <option value="GridCoin">GridCoin</option>
                            <option value="PeerCoin">PeerCoin</option>
                        </select>
                        <img src={bitcoin_icon} alt="" />
                    </div>
                    <div className="inp">
                        <input type="number" />
                        <span>ETH</span>
                    </div>
                </div>
                <div className="from">
                    <span>To</span>
                    <div className="sel">
                        <select value='Ethereum'>
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="GridCoin">GridCoin</option>
                            <option value="PeerCoin">PeerCoin</option>
                        </select>
                        <img src={bitcoin_icon} alt="" />
                    </div>
                    <div className="inp">
                        <input type="number" />
                        <span>BTC</span>
                    </div>
                </div>
            </div>
            <div className="box_from_to">
                <h2>from</h2>
                <h2>=========={">"}</h2>
                <h2>to</h2>
            </div>
            <button className='exchange_btn'>Exchange</button>
        </div>
    )
}

export default Exchange
