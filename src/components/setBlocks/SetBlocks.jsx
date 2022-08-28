import React from 'react'

const SetBlocks = ({incr, name}) => {
    return (
        <div className="currency__block">
            <div className="top__block">
                <div className="left_block">
                    <img src={`https://countryflagsapi.com/png/${name.slice(0,2)}`} alt="" />
                    <div className="text">
                        <h4 style={{ color: 'white', fontSize: '24px' }}>{name}</h4>
                        <span style={{ color: '#00E8AC' }}>1.93%</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <img src={incr} alt="" />
            </div>
        </div>
    )
}

export default SetBlocks
