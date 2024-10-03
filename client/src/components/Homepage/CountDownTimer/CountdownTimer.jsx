import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [openDate, setOpenDate] = useState(new Date('2024-10-10T00:00:00Z')); // Dummy open date
  const [closeDate, setCloseDate] = useState(new Date('2024-10-20T00:00:00Z')); // Dummy close date
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(true);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance;

      if (isAdmissionOpen) {
        distance = openDate - now;
        if (distance < 0) {
          setIsAdmissionOpen(false); // Switch to close countdown
          distance = closeDate - now; // Start counting down for admission close
        }
      } else {
        distance = closeDate - now;
      }

      // Calculate time parts
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [openDate, closeDate, isAdmissionOpen]);

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      {/* Scholar's head watermark */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10" 
        style={{ backgroundImage: "url('/path-to-your-scholar-image.png')" }} // Replace with your image path
      ></div>

      <div className="relative z-10 text-center p-6 bg-white shadow-lg rounded-lg max-w-xs w-full mx-auto sm:max-w-lg lg:max-w-3xl">
        <h1 className="text-xl font-bold text-gray-800 mb-6 sm:text-2xl lg:text-3xl">
          {isAdmissionOpen ? 'Next Admission Opens In:' : 'Admission Closes In:'}
        </h1>

        {/* Countdown Timer */}
        <div className="grid grid-flow-col gap-4 sm:gap-6 text-center auto-cols-max justify-center">
          <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded-md shadow-lg w-16 sm:w-24 lg:w-28">
            <span className="countdown font-mono text-2xl sm:text-4xl lg:text-5xl">
              <span style={{ "--value": days }}></span>
            </span>
            <span className="text-xs sm:text-sm lg:text-base">Days</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded-md shadow-lg w-16 sm:w-24 lg:w-28">
            <span className="countdown font-mono text-2xl sm:text-4xl lg:text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            <span className="text-xs sm:text-sm lg:text-base">Hours</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded-md shadow-lg w-16 sm:w-24 lg:w-28">
            <span className="countdown font-mono text-2xl sm:text-4xl lg:text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            <span className="text-xs sm:text-sm lg:text-base">Minutes</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded-md shadow-lg w-16 sm:w-24 lg:w-28">
            <span className="countdown font-mono text-2xl sm:text-4xl lg:text-5xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            <span className="text-xs sm:text-sm lg:text-base">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;