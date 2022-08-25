import React from 'react'
import { Doughnut} from 'react-chartjs-2'
import {ArcElement, Chart} from 'chart.js'
Chart.register(ArcElement);
const DoughChart = ({ arr, arr2 }) => {
    return (
        <div>
            <Doughnut
                data={{
                    labels: arr,
                    datasets: [{
                        label: 'My First Dataset',
                        data: arr2,
                        backgroundColor: [
                            'yellow',
                            'white',
                            'blue'
                        ],
                        borderColor: [
                            'blue'
                        ],
                        borderWidth: 1
                    }]
                }}
            />
        </div>
    )
}

export default DoughChart
    