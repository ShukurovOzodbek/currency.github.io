import React from 'react'
import DoughChart from '../Charts/DoughtChart'
import LineChart from '../Charts/LineChart'

const Market = () => {
    
    return (
        <div style={{width: '300px', height: '300px'}}>
            <LineChart w="100%" h="100%" arr={[2,4,6,8,10,12,14,16]} arr2={[28, 21, 40, 35, 43, 43, 45, 48]}/>
        </div>
    )
}

export default Market
