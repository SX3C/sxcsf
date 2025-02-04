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
            <Link to="/scanner-result">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mt-4">
                View Result Using Scanner
              </button>
            </Link>
            <div class="grid gap-4 grid-cols-2 mt-8">
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
            </div>
            <br />
            Click{" "}
            <Link className="text-blue-600" to="/results/semifinalists">
              Here
            </Link>{" "}
            to view the Semi Final Participants <br />
            <br />
            Designed and Developed by <b> Creation Duwal </b> 023neb745
          </div>
        </div>
      </section>
    </div>
  );
}
