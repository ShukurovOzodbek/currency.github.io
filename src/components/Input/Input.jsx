import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type="number" />
            <input type="text" list="row"/>
            <datalist id="row" onChange={(e) => props.onChangeCurrency(e.target.value)}>
                {props.rates.map((item, index) => <option value={item} key={index}>{item}</option>)}
            </datalist>
        </div>
    )
}

export default Input
