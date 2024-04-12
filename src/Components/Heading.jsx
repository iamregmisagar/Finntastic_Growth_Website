import React from 'react'

const Heading = ({details}) => {
  return (
    <>
      <div class="text-center py-10 px-24">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {details.h1}
      </h1>
      <p class="leading-relaxed">
      {details.p}
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    </>
  )
}

export default Heading
