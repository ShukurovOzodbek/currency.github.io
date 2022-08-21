import React from 'react'
import piechart from '../../assets/piechart.png'
import eth from '../../assets/eth.png'
import btc from '../../assets/btc.png'
import dash from '../../assets/dash.png'
import box from '../../assets/box.png'
import bitcoin_icon from '../../assets/bitcoin_icon.png'
import linegraph from '../../assets/linegraph.png'
import './Overview.css'

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
    <>
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
                <img src={piechart} alt="" />
              </div>
              <div className="numbers">
                <span><img src={eth} alt="" /> Ethereum <b>18%</b> </span>
                <span><img src={btc} alt="" /> Bitcoin <b className='blue'>64%</b> </span>
                <span><img src={dash} alt="" /> Dash <b className='yellow'>18%</b> </span>
              </div>
            </div>
            <img className='box' src={box} alt="" />
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
                          <img src={linegraph} alt="" />
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
          </div>
        </div> 
    </>
  )
}

export default Overview
