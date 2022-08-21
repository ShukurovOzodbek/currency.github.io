import React from 'react'
import './Tranz.css'
import coin from '../../assets/coin.png'

const Tranz = () => {
    const tranz = [
        {
          img: '/assets/torigth',
          class: 'wait',
          name: 'Waiting'
        },
        {
          img: '/assets/toleft',
          class: 'error',
          name: 'Error'
        },
        {
          img: '/assets/torigth',
          class: 'wait',
          name: 'Waiting'
        },
        {
          img: '/assets/torigth',
          class: 'completed',
          name: 'Completed'
        },
        {
          img: '/assets/torigth',
          class: 'wait',
          name: 'Waiting'
        },
        {
          img: '/assets/torigth',
          class: 'wait',
          name: 'Waiting'
        },
        {
          img: '/assets/torigth',
          class: 'wait',
          name: 'Waiting'
        }
      ]
    return (
        <>
            <div className="transaction_page">
                <div className="top">
                    <h4>Transictions</h4>
                    <button>Export History</button>
                </div>
                <div className="filter">
                    <span>Total 1,543</span>
                    <div className="filter_btn">
                        <a className='active_btn'>All</a>
                        <a>Send</a>
                        <a>Recent</a>
                    </div>
                </div>
                <ul>
                    {
                        tranz.map((item, index) =>
                            <li>
                                <div className="date_time">
                                    <span>AM 01:16</span>
                                    <span>24 dec 2018</span>
                                    <div className="circle">
                                        <img src={coin} alt="" />
                                    </div>
                                </div>
                                <div className="center_time">
                                    {/* <img src={require(item.img) + '.png'} alt="" /> */}
                                    <code>74EKRJMXkhKDR5dj34578fgirwE22sfg</code>
                                </div>
                                <div className="end">
                                    <b>0,0085 BTC</b>
                                    <button className={item.class}>{item.name}</button>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default Tranz
