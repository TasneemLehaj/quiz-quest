import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {

    const topics = useLoaderData();
    const data = topics.data;
    // console.log(topics);

    return (
        <div className='pb-10'>

            <h1 className='text-2xl font-bold text-center pt-5'> Let's play and see how many of them you got right!!! </h1>

            <div className='p-12 grid grid-cols-4'>
                {
                    data.map(data => <Topic key={data.id}
                        data={data}
                    ></Topic>)
                }
            </div>
        </div>
    )
}

export default Quiz;