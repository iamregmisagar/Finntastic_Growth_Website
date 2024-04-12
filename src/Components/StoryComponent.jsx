import React from 'react'

const StoryComponent = ({details}) => {
  return (
    <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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

export default StoryComponent
