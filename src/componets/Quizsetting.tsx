import React, { ChangeEvent, useState } from "react";
import { QuestionState, fetchQuiz } from "../api/Api";

type prop = {
    loading : boolean;
    setloading : (value:boolean) => void;
    setquestion:(value:QuestionState[])=>void;
  }

function Quizsetting({loading,setloading,setquestion}:prop):React.ReactElement {
  const [diffi, setdiffi] = useState<string>("easy");
  const [catg, setcatg] = useState<string>('9');
  const difficult = (e: ChangeEvent<HTMLSelectElement>) => {
    setdiffi(e.target.value);
  };
  const catagory = (e: ChangeEvent<HTMLSelectElement>) => {
    setcatg(e.target.value);
  };
  const submit = async () => {
    try {
        setloading(true)
        const allquestion = await fetchQuiz(catg,diffi)
        setquestion(allquestion)
        
        setloading(false)
        console.log(allquestion)
        
    } catch (error) {
        setloading(!loading)
        alert('API is Under maintainence plz try later..')
        console.log(error)
        
    }
    
  };
  return (
    <>
      <div className="flex justify-center align-middle m-10  ">
        <h1 className="items-center font-semibold text-2xl  dark:text-white">
          Create Quiz
        </h1>
      </div>
      <div className="flex justify-center align-middle items-center m-10 border-2 border-gray-200">
        <form className=" p-5 w-full md:w-1/2 ">
          <div className="m-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Difiiculty
            </label>
            <select
              value={diffi}
              onChange={difficult}
              className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="m-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Catagory
            </label>
            <select
              onChange={catagory}
              className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="9">GK</option>
              <option value="28">Vehicles</option>
              <option value="23">History</option>
            </select>
          </div>
          <div
            className="flex justify-center align-middle m-5"
            onClick={submit}
          >
            <button
              type="button"
              className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Quizsetting;
