import React from 'react';

const Topic = ({ data, handleQuiz }) => {

    const { name, logo, total } = data;

    return (
        <div className='py-10 m-auto block '>
            <div className="card w-4/6 bg-lime-100 bg-base-100 shadow-xl shadow-cyan-500/50 ">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question: {total}</p>
                    <div className="card-actions">
                        <button onClick={() => handleQuiz()} className="btn btn-primary cursor-pointer">Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;