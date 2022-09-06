import React, { useEffect, useState } from 'react'
import incr from '../../assets/incr.png'
import decr from '../../assets/decr.png'
import './Market.css'
import axios from 'axios'
import SetBlocks from '../setBlocks/SetBlocks'
import { Fade } from 'react-reveal'

const Market = () => {
    const [curr, setCurr] = useState([])

    useEffect(() => {
        axios.get(`https://cdn.cur.su/api/latest.json`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setCurr(Object.keys(res.data.rates));
                }
            });
    }, []);
    return (
        <Fade bottom>
            <div>
                <h3 style={{ color: 'white', marginTop: '15px' }}>Market</h3>
                <div className="curencys">
                    {
                        curr.splice(0, 10).map((item, index) => <SetBlocks key={index} incr={incr} name={item} />)
                    }
                    {
                        curr.splice(10, 32).map((item, index) => <SetBlocks key={index} incr={decr} name={item} />)
                    }
                    {
                        curr.splice(32, 49).map((item, index) => <SetBlocks key={index} incr={incr} name={item} />)
                    }
                </div>
            </div>
        </Fade>
    )
}

export default Market
