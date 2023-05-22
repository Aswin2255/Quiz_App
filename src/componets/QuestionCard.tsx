import React, { ChangeEvent,  useState } from "react";
type Prop = {
  quesition: string;
  answer: string[];
  correctanswer:string;
};
type Hash = Record <string,boolean>

function QuestionCard({ quesition, answer,  correctanswer }: Prop): React.ReactElement {
  const[corect,setcorect] = useState<Hash>({})
  const [wrong,setwrong] = useState<Hash>({})
  const checkcorect = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log(corect)
    
    if(e.target.value ===  correctanswer){
     
    setcorect({
      [e.target.value] : true
    })
    setwrong({
      [e.target.value] : false
    })
    }
    else{
      setcorect({
        [correctanswer] : true,
        [e.target.value] : false
      })
      setwrong({
        [e.target.value] : true
      })
    }
  }
  return (
    <div className="justify-center align-middle items-center m-5 border-2  dark:bg-gray-900 border-gray-200">
      <form className="p-5 w-full  ">
        <div className="m-2">
          <label className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
            {quesition}
          </label>
        </div>
        {answer.map((e) => {
          return (
            <div className={corect[e] ? " cursor-pointer flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 bg-green-600" : wrong[e] ?  " cursor-pointer flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 bg-red-600 " : " cursor-pointer flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 "}>
              <input
                type="radio"
                value={e}
                name="answer"
                onChange={checkcorect}
                
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {e}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default QuestionCard;
