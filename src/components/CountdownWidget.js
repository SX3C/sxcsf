import React from "react";
import Countdown from "react-countdown";

function renderer({ days, hours, minutes, seconds, completed }) {
  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-black">
            {completed ? 0 : days}
          </span>
          <span className="text-sm text-gray-500">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-black">
            {completed ? 0 : hours}
          </span>
          <span className="text-sm text-gray-500">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-black">
            {completed ? 0 : minutes}
          </span>
          <span className="text-sm text-gray-500">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-black">
            {completed ? 0 : seconds}
          </span>
          <span className="text-sm text-gray-500">Seconds</span>
        </div>
      </div>
      {completed ? (
        <div className="text-4xl font-bold text-black mt-4">It's Here!!!</div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default function CountdownWidget() {
  return (
    <>
      <Countdown date={Date.parse("2024-09-07")} renderer={renderer} />
    </>
  );
}
