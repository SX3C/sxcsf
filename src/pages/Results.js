import React from "react";
import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div>
      <Link to="/">
        <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md">
          Home
        </button>
      </Link>

      <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Results
            </h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Results for the Event Appear here
            </p>
            <p class="max-w-md mx-auto text-base leading-relaxed text-gray-600">
              Sept 7th and 8th
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* <Link to="/scanner-result">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mt-4">
              View Result Using Scanner
            </button>
          </Link>             */}

            <div className="flex mt-8 flex-col items-center justify-center">

              SEMI FINAL PARTICIPANTS
             <div className="mt-4 flex items-center justify-center">
            <img className="w-full" src="/semi-finals-participants.PNG" />
        </div> 
            {/* RESULTS FOR RIV    
        <div className="mt-4 flex items-center justify-center">
            <img className="w-full md:w-1/2" src="/results-r4.PNG" />
        </div> */}
            </div>


        {/* <div className="mt-4">
          <img className="w-full" src="/forround4.PNG" />
        </div>

        <div className="mt-4">
            Click <a className="text-blue-500" href="https://docs.google.com/spreadsheets/d/1Zph78rgH7iuBACZfiVFxSw1-q8hPJhX_HVn2e6iLlEU/edit?usp=sharing"> here </a> for a file based result of Round II
        </div> */}

        <br/>

        Due to Systems Overload, we will not be able to show the results in the desired format today.

          {/* <div class="grid gap-4 grid-cols-2 mt-14">
            <Link to="/results/1">
              <div class="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p class="text-6xl font-medium tracking-tight">RI</p>
                <p>Round One</p>
              </div>
            </Link>

            <Link to="/results/2">
              <div class="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p class="text-6xl font-medium tracking-tight">RII</p>
                <p>Round Two</p>
                <p className="mt-2">Published</p>
              </div>
            </Link>

            <Link to="/results/3">
              <div class="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p class="text-6xl font-medium tracking-tight">RIII</p>
                <p>Round Three</p>
              </div>
            </Link>

            <Link to="/results/4">
              <div class="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p class="text-6xl font-medium tracking-tight">RIV</p>
                <p>Round Four</p>
              </div>
            </Link>
          </div> */}

          
      </div>
        </div>
      </section>
    </div>
  );
}
