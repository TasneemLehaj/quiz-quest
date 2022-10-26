import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {

    const topics = useLoaderData();
    const data = topics.data;
    console.log(topics);

    return (
        <div className='home py-5'>

            <div>
                <img className='w-full h-80' src="https://i.pinimg.com/originals/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg" alt="" />
            </div>
            <div className='topic-container'>
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