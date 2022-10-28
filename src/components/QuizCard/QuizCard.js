import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizCard = () => {

    const quiz = useLoaderData();
    // const [loadData, setLoadData] = useState([]);

    // const handleQuiz = (quiz) => {
    //     console.log(quiz);
    // const data = quiz.data;
    // console.log(data);
    // return (
    //     <div>
    //         <h2>This is question card: {data.length}</h2>

    //         {
    //             data.map(quizQues => console.log(quizQues.id))
    //         }
    //     </div>
    // );

}



export default QuizCard;