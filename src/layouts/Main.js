import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';


export const QuizContex = createContext([])

const Main = () => {
    const quizTopic = useLoaderData();
    return (
        <div>
            <QuizContex.Provider value={quizTopic}>
                <Header></Header>
                <Outlet></Outlet>
            </QuizContex.Provider>
        </div>
    );
};

export default Main;