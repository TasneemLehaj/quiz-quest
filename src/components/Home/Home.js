import React from 'react';
import './Home.css'
// import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import { useContext } from 'react';
import { QuizContex } from '../../layouts/Main';

const Home = () => {

    // const topics = useLoaderData();
    // const data = topics.data;
    // console.log(topics);
    const topics = useContext(QuizContex)
    const data = topics.data;

    return (
        <div className='home pb-10'>

            <div className='home-image'>
                <img className='w-full h-80' src="https://i.pinimg.com/originals/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg" alt="" />
                <h1 className='text-2xl font-bold text-center'>There are fun and exiciting quiz questions we prepare for you <br></br> about your favorite topics! Let's play and learn!! </h1>
            </div>
            <div className='p-12 grid grid-cols-2'>
                {
                    data.map(data => <Topic key={data.id}
                        data={data}
                    ></Topic>)
                }
            </div>
        </div>
    )
};

export default Home;