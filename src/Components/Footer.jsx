import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <footer class="footer text-gray-600 body-font">
  <div class="container px-5 pt-5 mb-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Finntastic Growth Oy </h2>
        <h3>Company code <span> 3394465-7 </span></h3>
        <p class="mt-2 text-sm text-gray-500">Helsinki, Finland</p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© Finntastic Growth Oy 2023, all rights reserved —
        <a  rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@finntasticgrowth</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
      
    </>
  )
}

export default Footer
