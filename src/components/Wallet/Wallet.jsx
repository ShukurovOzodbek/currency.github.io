import React from 'react'
import eth from '../../assets/eth.png'
import btc from '../../assets/btc.png'
import dash from '../../assets/dash.png'
import bitcoin_icon from '../../assets/bitcoin_icon.png'
import './Wallet.css'
import DoughChart from '../Charts/DoughtChart'
import LineChart from '../Charts/LineChart'
import Coin from '../Coin/Coin'
import line from '../../assets/line.png'
import raise from '../../assets/raise.png'



const Wallet = () => {
    const arr = [
        {
            name: 'BitCoin',
            back: ''
        },
        {
            name: 'Ethereum',
            back: 'blue'
        }
    ]

    const transact = [
        {
            name: 'Recived BitCoin',
            author: 'From Elon Musk',
        },
        {
            name: 'Recived BitCoin',
            author: 'From Elon Musk',
        },
        {
            name: 'Recived BitCoin',
            author: 'From Elon Musk',
        },
        {
            name: 'Recived BitCoin',
            author: 'From Elon Musk',
        },
        {
            name: 'Recived BitCoin',
            author: 'From Elon Musk',
        }
    ]

    return (
        <div className="content2">
            <h4>Wallet</h4>
            <div className="boxes2">
                <div className="balance">
                    <div className="chartpie">
                        <DoughChart w="70%" h="70%" arr={[]} arr2={[18, 18, 64]} />
                    </div>
                    <div className="numbers">
                        <span><img src={eth} alt="" /> Ethereum <b>18%</b> </span>
                        <span><img src={btc} alt="" /> Bitcoin <b className='blue'>64%</b> </span>
                        <span><img src={dash} alt="" /> Dash <b className='yellow'>18%</b> </span>
                    </div>
                </div>
                <div className="coins">
                    {
                        arr.map((item, index) => <Coin key={index} bitcoin_icon={bitcoin_icon} back={item.back} image={line} name={item.name} />)
                    }
                </div>
            </div>
            <div className="act">
                <div className="box_linegraph">
                    <LineChart w="100%" h="100%" arr={[2, 4, 6, 8, 10, 12, 14, 16]} arr2={[28, 21, 40, 35, 43, 43, 45, 48]} />
                </div>
                <div className="transact">
                    <h4>RECENT TRANSACTIONS</h4>
                    <div className="line"></div>
                    {
                        transact.map((item, index) => <div className="tr">
                            <div className="tr_left">
                                <span>AM 01:16</span>
                                <img src={raise} alt="" />
                                <div className="tr_names">
                                    <span>{item.name}</span>
                                    <span>{item.author}</span>
                                </div>
                            </div>
                            <div className="tr_right">
                                <span>+ 4,800</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Wallet
