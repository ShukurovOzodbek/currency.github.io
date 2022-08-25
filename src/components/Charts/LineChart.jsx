import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChart = ({ arr, arr2 }) => {
    return (
        // <div className='appjs' style={{marginTop: '30px', width:"350px"}}>
            <Line
                data={{
                    labels: arr,
                    datasets: [{
                        label: 'My First Dataset',
                        data: arr2,
                        backgroundColor: [
                            'blue'
                        ],
                        borderColor: [
                            'blue'
                        ],
                        borderWidth: 1
                    }]
                }}
            />
        // </div>
    )
}

export default LineChart
    