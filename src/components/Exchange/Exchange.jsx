import { React, useState, useEffect } from 'react'
import bitcoin_icon from '../../assets/bitcoin_icon.png'
import Input from '../Input/Input';
import './Exchange.css'
import axios from 'axios';

const Exchange = () => {
    const [currency1, setCurrency1] = useState("UZS");
    const [currency2, setCurrency2] = useState("USD");
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [rates, setRates] = useState({});

    // const API_KEY = "SzkW4JIGuBKj8XaJoRS5kpDY8PMdfjdd";

    useEffect(() => {
        axios.get(`https://cdn.cur.su/api/latest.json`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setRates(res.data.rates);
                }
            });
    }, []);

    function handleChangeAmount1(amount1) {
        setAmount2(amount1 * rates[currency2] / rates[currency1]);
        setAmount1(amount1);
    }
    function handleChangeCurrency1(currency1) {
        setAmount2(amount1 * rates[currency2] / rates[currency1]);
        setCurrency1(currency1);
    }

    function handleChangeAmount2(amount2) {
        setAmount1(amount2 * rates[currency1] / rates[currency2]);
        setAmount2(amount2);
    }
    function handleChangeCurrency2(currency2) {
        setAmount2(amount2 * rates[currency1] / rates[currency2]);
        setCurrency2(currency2);
    }

    return (
        <div className="exchange">
            <h4>Exchange</h4>
            <div className="currency">
                <div className="from">
                    <span>From</span>
                    <div className="inp">
                        <img className='image_flag' src={`https://countryflagsapi.com/png/${currency1.slice(0,2)}`} alt="" />
                        <Input
                            onChangeAmount={handleChangeAmount1}
                            onChangeCurrency={handleChangeCurrency1}
                            amount={amount1}
                            currency={currency1}
                            rates={Object.keys(rates)}
                        />
                    </div>
                </div>
                <div className="from">
                    <span>To</span>
                    <div className="inp">
                        <img className='image_flag' src={`https://countryflagsapi.com/png/${currency2.slice(0,2)}`} alt="" />
                        <Input
                            onChangeAmount={handleChangeAmount2}
                            onChangeCurrency={handleChangeCurrency2}
                            amount={amount2}
                            currency={currency2}
                            rates={Object.keys(rates)}
                        />
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
