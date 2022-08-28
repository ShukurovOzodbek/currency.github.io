import React from 'react'

const Coin = ({back, bitcoin_icon, image, name}) => {
    return (
        <div className={`coin ${back}`}>
            <h4>{name}</h4>
            <div className="bit">
                <div className="costs">
                    <span>5 248 USD</span>
                    <p>+2,59%</p>
                </div>
                <img src={bitcoin_icon} alt="" />
            </div>
            <div className="center_img">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Coin
