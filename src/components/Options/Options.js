import React from 'react';

const Options = ({ option, correct }) => {
    return (
        <div className='text-white'>
            <p onClick={() => correct(option)} className='py-2 rounded-md bg-green-800 hover:bg-green-400 cursor-pointer'> {option} </p>
        </div>
    );
};

export default Options;