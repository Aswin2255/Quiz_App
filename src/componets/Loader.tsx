import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

function Loader() {
  return (
    <>
     <div className="flex justify-center align-middle m-10  ">
        <h1 className="items-center font-semibold text-2xl  dark:text-white">
          Please Wait For Some Time
        </h1>
      </div>
    <div className='flex justify-center align-middle items-center m-20 '>
        <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
      
    </div>
    </>
  )
}

export default Loader
