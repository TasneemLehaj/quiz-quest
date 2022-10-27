import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            {/* ques 1 */}
            <div className='text-left bg-base-100 m-10 border p-10 rounded-xl'>
                <h2 className='font-bold'> Q. What is the purpose of React Router? </h2>
                <p><span className='font-bold'>Answer: </span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React  is mainly used for developing Single Page Web Applications. So, overall it can be said that, React Router is used to define multiple routes in the application.
                </p>
            </div>
            {/* ques 2 */}
            <div className='text-left bg-base-100 m-10 border p-10 rounded-xl'>
                <h2 className='font-bold'>Q. How does Context API work?</h2>
                <p><span className='font-bold'>Answer:</span> </p>
            </div>

            {/* ques 3 */}
            <div className='text-left bg-base-100 m-10 border p-10 rounded-xl'>
                <h2 className='font-bold'>Q. Use of useRef Hook ?</h2>
                <p><span className='font-bold'>Answer:</span> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>




        </div>
    );
};

export default Blog;