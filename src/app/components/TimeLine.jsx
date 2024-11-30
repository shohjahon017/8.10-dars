import React from "react";

function TimeLine({ currentStep }) {
  const steps = ["Start", "1", "2", "3"];
  return (
    <div className="flex flex-col items-center h-full justify-center relative">
      <div className="absolute -right-4 transform -translate-x-1/2 h-full w-[2px] bg-white"></div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center justify-center mb-8 ${
            currentStep === index ? "text-[#FBD784]" : "text-white"
          } text-lg font-bold`}
        >
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
