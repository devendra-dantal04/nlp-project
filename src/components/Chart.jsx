import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto'

function ChartComponent({ reviewCount }) {
    const canvasRef = useRef();

    useEffect(() => {
        const ctx = canvasRef.current;
        let chartStatus = Chart.getChart(ctx);

        // Check if chartStatus exists and is not null before destroying it
        if (chartStatus) {
            chartStatus.destroy();
        }

        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Positive", "Neutral", "Negative"],
                datasets: [
                    {
                        label: 'Product Review',
                        data: [reviewCount.Positive, reviewCount.Neutral, reviewCount.Negative],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Product Review',
                    },
                },
            },
        });

        return () => {
            if (chartStatus) {
                chartStatus.destroy();
            }
        }
    }, [reviewCount])

    return <div className='container w-full lg:w-1/2'>
        <canvas ref={canvasRef}></canvas>
    </div>;
}

export default ChartComponent;
