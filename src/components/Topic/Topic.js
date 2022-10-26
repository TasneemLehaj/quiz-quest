import React from 'react';

const Topic = ({ data }) => {

    const { name, logo, total } = data;

    return (
        <div className='flex items-center m-auto'>
            <div className="card w-1/3 bg-yellow-50 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question: {total}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary cursor-pointer">Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;