import React, { useContext } from 'react';
import { QuizContex } from '../../layouts/Main';
import Topic from '../Topic/Topic';



const Quiz = () => {

    const topics = useContext(QuizContex)
    const data = topics.data;


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