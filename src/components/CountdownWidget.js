import React from "react";
import Countdown from "react-countdown";

function renderer({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return <span className="text-4xl font-bold text-black">Event Started</span>;
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-black">{days}</span>
        <span className="text-sm text-gray-500">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-black">{hours}</span>
        <span className="text-sm text-gray-500">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-black">{minutes}</span>
        <span className="text-sm text-gray-500">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-black">{seconds}</span>
        <span className="text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
}

export default function CountdownWidget() {
  return (
    <>
      <Countdown date={Date.parse("2024-09-07")} renderer={renderer} />
    </>
  );
}
