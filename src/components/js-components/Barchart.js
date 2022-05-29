import React from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const Barchart = ({ state }) => {
    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
                        x: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        y: [{
                            ticks: {

                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    );
    //   }
}
export default Barchart 
