import React, { useState, useEffect, useRef } from 'react';

const Numbers = ({value= 2000, step= 20,size = 400, plus = true}) => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Set up Intersection Observer to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set isVisible to true when the section is in view
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Cleanup observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Start counting when the section is visible and number is less than 255
  useEffect(() => {
    if (isVisible && number < value) {
      const timer = setInterval(() => {
        setNumber((prevNumber) => Math.min(prevNumber + step, value)); // Increase by 'step' and ensure it doesn't exceed 255
      }, 20); // Increase number every 20ms

      return () => clearInterval(timer); // Clear the timer when the component unmounts or number reaches 255
    }
  }, [isVisible, number]);

  return (
    <div ref={sectionRef}>
      <h1 className={` text-[40px]`}>{number}{plus && '+'}</h1>
    </div>
  );
};

export default Numbers;