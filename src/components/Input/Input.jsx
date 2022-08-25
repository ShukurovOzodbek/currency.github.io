import React, { useState } from 'react'

const Input = (props) => {
    const [span, setSpan] = useState('')

    return (
        <div>
            <input type="number" value={props.amount} onChange={(e) => props.onChangeAmount(e.target.value)} />
            <span>{props.currency}</span>
            <input value={props.currency} style={{marginTop: '10px'}} type="text" list="row" onChange={(e) => props.onChangeCurrency(e.target.value)}/>
            <datalist id="row" >
                {props.rates.map((item, index) => <option value={item} key={index}>{item}</option>)}
            </datalist>
        </div>
    )
}

export default Input
