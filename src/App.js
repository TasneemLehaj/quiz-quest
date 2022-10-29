
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizCard from './components/QuizCard/QuizCard';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import Topic from './components/Topic/Topic';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizCard></QuizCard>
        }

      ]
    },


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
