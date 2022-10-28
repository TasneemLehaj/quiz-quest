import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            {/* ques 1 */}
            <div className='text-left m-10 border p-10 rounded-xl bg-base-100 shadow-lg shadow-cyan-500/50 '>
                <h2 className='font-bold'> Q. What is the purpose of React Router? </h2>
                <p><span className='font-bold'>Answer: </span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React  is mainly used for developing Single Page Web Applications. So, overall it can be said that, React Router is used to define multiple routes in the application.
                </p>
            </div>
            {/* ques 2 */}
            <div className='text-left m-10 border p-10 rounded-xl bg-base-100 shadow-lg shadow-cyan-500/50 '>
                <h2 className='font-bold'>Q. How does Context API work?</h2>
                <p><span className='font-bold'>Answer:</span> Context API is like the alternative of prop drilling. Prop drilling refers to moving props from grandparent to child to parent and son on manually. The React Context API is a way for a React app to effectively produce global variables that can be passed around without prop drilling. to use the Context APi,first we need to create a context using the createContext function from React.The createContext function accepts an initial value, but this initial value is not required.The Provider component is going to be used to wrap the components that are going to have access to the context.The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data.Then we have to use the useContext hook to load the data on the component that we want to see the data. The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that we want to have access to.Thus, without prop drilling a data can be passed through Context API.</p>
            </div>

            {/* ques 3 */}
            <div className='text-left m-10 border p-10 rounded-xl bg-base-100 shadow-lg shadow-cyan-500/50 '>
                <h2 className='font-bold'>Q. Use of useRef Hook ?</h2>
                <p><span className='font-bold'>Answer:</span> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>




        </div>
    );
};

export default Blog;