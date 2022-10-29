import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const chart = useLoaderData();
    const data = chart.data;
    // console.log(data);
    return (
        <div className=' py-10 m-auto block'>
            <p className='px-5 pb-10 font-bold text-center'>This is a chart that shows the statistics of number of questions every topic has. Here, x-axis shows the topic name and y-axis shows number of qustions each subject has according to the topics in this quiz. </p>

            <div className='py-10 flex items-center'>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />

                </LineChart>
            </div>

        </div >
    );
};

export default Statistics;