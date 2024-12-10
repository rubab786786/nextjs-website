"use client"
import React from 'react';
// import CountUp from 'react-countup';

const CounterSection = () => {
  const counters = [
    { id: 1, value: 1478, label: 'Active Users', image: '/images/approved-1-1.png' },
    { id: 2, value: 159, label: 'Active Campaigners', image: '/images/Group-1000008054-1.png' },
    { id: 3, value: 1319, label: 'Active Investors', image: '/images/Group-2.png' },
    { id: 4, value: 10, label: 'Total Products', image: '/images/Analytics-Piew.png' },
  ];

  return (
    <section className="counte-section">
      <div className="w-layout-blockcontainer counte-conatiner w-container">
        {counters.map((counter) => (
          <div
            key={counter.id}
            id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51c2-69ff34fb"
            className="w-layout-layout quick-stack-2 wf-layout-layout"
          >
            <div className="w-layout-cell cell-8">
              <img src={counter.image} loading="lazy" alt="" className="image-46" />
            </div>
            <div className="w-layout-cell cell-7">
              <h1 className="counter">
                {/* <CountUp
                  start={0}
                  end={counter.value}
                  duration={2.5} // Duration of the animation (2.5 seconds)
                  delay={0} // No delay
                /> */}
              </h1>
              <h1 className="heading-4">{counter.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
