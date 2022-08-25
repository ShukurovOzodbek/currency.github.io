import React from 'react'
import eth from '../../assets/eth.png'
import btc from '../../assets/btc.png'
import dash from '../../assets/dash.png'
import bitcoin_icon from '../../assets/bitcoin_icon.png'
import './Overview.css'
import DoughChart from '../Charts/DoughtChart'
import LineChart from '../Charts/LineChart'
import lower from '../../assets/lower.png'
import higher from '../../assets/higher.png'

const Overview = () => {
  const arr = [
    {
      name: 'BitCoin',
      socr_name: 'BTC',
      back: 'first_back',
    },
    {
      name: 'Ethereum',
      socr_name: 'ETH',
      back: 'second_back',
    },
    {
      name: 'GridCoin',
      socr_name: 'GRC',
      back: 'third_back',
    },
    {
      name: 'Aetirnity',
      socr_name: 'AE',
      back: 'fourth_back',
    }
  ]
  return (
    <div className="content">
      <div className="date">
        <div className="date_theme">
          <h3>Overview</h3>
          <span>25 October, Sunday</span>
        </div>
        <button className="add">Add Widget</button>
      </div>
      <div className="boxes">
        <div className="balance">
          <h4>Balance</h4>
          <div className="chartpie">
            <DoughChart w="70%" h="70%" arr={[]} arr2={[18, 18, 64]} />
          </div>
          <div className="numbers">
            <span><img src={eth} alt="" /> Ethereum <b>18%</b> </span>
            <span><img src={btc} alt="" /> Bitcoin <b className='blue'>64%</b> </span>
            <span><img src={dash} alt="" /> Dash <b className='yellow'>18%</b> </span>
          </div>
        </div>
        <div className="box">
          <div className="block">
            <span>Spending</span>
            <select value='January' >
              <option value="January">January</option>
            </select>
          </div>
          <h3>$ 5 , 743 . 35</h3>
          <span>total spending</span>
          <LineChart w="100%" h="100%" arr={[2, 4, 6, 8, 10, 12, 14, 16]} arr2={[28, 21, 40, 35, 43, 43, 45, 48]} />
        </div>
        <div className="btc_course">
          {
            arr.map((item, index) =>
              <div key={index} className={`ractengle ${item.back}`}>
                <h4>{item.name}</h4>
                <div className="main">
                  <div className="imgs">
                    <img src={bitcoin_icon} alt="" />
                    <div className="num">
                      <span>600 {item.socr_name}</span>
                      <span>$30,000,000</span>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="linegraph">
                      <div className="first_line">
                        <span> <img src={lower} alt="" /> $1 200= 0,074 BTC</span>
                        <div className="line"></div>
                        <span> <img src={higher} alt="" /> $1 200= 0,074 BTC</span>
                        <div className="line"></div>
                        <span> <img src={higher} alt="" /> $1 200= 0,074 BTC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="news">
          <h4>Recent News</h4>
          <ul className="new">
            <li><span>19 hours ago</span><p>SEC Fails to Show Court Blockvest Tokens Are
              Securities</p></li>
            <li><span>23 hours ago</span><p>Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits the Global Economy</p></li>
            <li><span>11.22, 15:27 </span><p>A Look at the Multi-Currency Encrypted Messaging App ‘Chat.Chat’</p></li>
            <li><span>11.21, 11:43 </span><p>Four Ways to Commemorate Bitcoin’s 10th Anniversary</p></li>
          </ul>
        </div>
        <div className="box2">
          <div className="block">
            <span>Spending</span>
            <select value='January' >
              <option value="January">January</option>
            </select>
          </div>
          <div className="chart2">
            <LineChart w="100%" h="100%" arr={[2, 4, 6, 8, 10, 12, 14, 16]} arr2={[28, 21, 40, 35, 43, 43, 45, 48]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
