import React from "react";
import { Link } from "react-router-dom";

export default function Semifinalists() {
  return (
    <div>
      <Link to="/results">
        <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md">
          Back
        </button>
      </Link>

      <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              SEMI FINALISTS
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex mt-8 flex-col items-center justify-center">
              Teams Qualified for Semi Finals
              <div className="mt-4 flex items-center justify-center">
                <img className="w-full" src="/semi-finals-participants.PNG" />
              </div>
            </div>
            <br />
            Designed and Developed by <b> Creation Duwal </b> 023neb745
          </div>
        </div>
      </section>
    </div>
  );
}
