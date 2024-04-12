import React from 'react'

const LastStoryComponent = ({details}) => {
  return (
    <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">
                {details.h1}
                </h2>
                <p className="leading-relaxed">
                {details.p}
                </p>
              </div>
            </div> 
  )
}

export default LastStoryComponent
