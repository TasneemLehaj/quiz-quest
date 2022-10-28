import React from 'react';
import { toast } from 'react-toastify';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';


const Questions = ({ allquestion }) => {
    const { question, options, correctAnswer } = allquestion;

    const correct = (option) => {
        if (option === correctAnswer) {
            console.log('ok');
            toast.success('Correct Answer')
        } else {
            toast.error('Wrong Answer')
        }
    }


    //  Display Correct Ans
    const handleCorrectAns = () => {
        Swal.fire(`Correct Answer is: ${correctAnswer}`);
    }
    return (
        <div>
            <div className=" bg-green-700 flex">
                <p className='text-2xl text-white m-2 py-3 w-full' text-center> {question} </p>
                <button onClick={handleCorrectAns}>
                    <EyeIcon className="h-8 w-8 text-white mr-10" />
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4  p-2 mx-2">

                {
                    options.map(option => <Options
                        option={option}
                        correct={correct}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;

