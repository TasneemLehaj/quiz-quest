import React from 'react';

const Options = ({ option, correct }) => {
    return (
        <div className=' text-stone-600'>
            <p onClick={() => correct(option)} className='py-2 rounded-md bg-green-200 hover:bg-green-400 cursor-pointer shadow-md shadow-cyan-500/50'> {option} </p>
        </div>
    );
};

export default Options;