import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizCard = () => {

    const quiz = useLoaderData();
    const [loadData, setLoadData] = useState([]);

    const handleQuiz = (quiz) => {
        console.log(quiz);

    }

    return (
        <div>
            <h2>This is question card</h2>
        </div>
    );
};

export default QuizCard;