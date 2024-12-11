"use client";
import React, { useState, useEffect } from "react";

const CounterSection = () => {
  const counters = [
    { id: 1, value: 1478, label: "Active Users", image: "/images/approved-1-1.png" },
    { id: 2, value: 159, label: "Active Campaigners", image: "/images/Group-1000008054-1.png" },
    { id: 3, value: 1319, label: "Active Investors", image: "/images/Group-2.png" },
    { id: 4, value: 10, label: "Total Products", image: "/images/Analytics-Piew.png" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, index) => {
      const increment = Math.ceil(counter.value / 100); // Adjust the speed
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < counter.value) {
            newCounts[index] += increment;
          } else {
            newCounts[index] = counter.value;
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 25); // Adjust the interval duration (25ms)
    });
  }, [counters]);

  return (
    <section className="counte-section">
      <div className="w-layout-blockcontainer counte-conatiner w-container">
        {counters.map((counter, index) => (
          <div
            key={counter.id}
            id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51c2-69ff34fb"
            className="w-layout-layout quick-stack-2 wf-layout-layout"
          >
            <div className="w-layout-cell cell-8">
              <img src={counter.image} loading="lazy" alt="" className="image-46" />
            </div>
            <div className="w-layout-cell cell-7">
              <h1 className="counter">{counts[index]}</h1>
              <h1 className="heading-4">{counter.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
