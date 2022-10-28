import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizCard = () => {
    const quiz = useLoaderData();
    const { name, id, questions } = quiz.data;

    return (
        <div>
            <h2 className='py-2 bg-orange-500 text-2xl text-white mt-3'>Quiz Name: {name}</h2>

            {
                questions.map(allquestion => <Questions
                    key={id}
                    allquestion={allquestion}
                ></Questions>)
            }
        </div>
    );
};

export default QuizCard;