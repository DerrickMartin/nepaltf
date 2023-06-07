import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

function SiteVisit() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Update the visit count when the component mounts
    setVisitCount(getVisitCountFromLocalStorage());

    // Send a pageview event to Google Analytics
    ReactGA.pageview(window.location.pathname);
  }, []);

  const incrementCount = () => {
    const newCount = visitCount + 1;
    setVisitCount(newCount);
    saveVisitCountToLocalStorage(newCount);
  };

  const saveVisitCountToLocalStorage = (count) => {
    localStorage.setItem('visitCount', count);
  };

  const getVisitCountFromLocalStorage = () => {
    const count = localStorage.getItem('visitCount');
    return count ? parseInt(count, 10) : 0;
  };

  return (
    <div>
      <h2>Total Site Visits</h2>
      <p>Count: {visitCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default SiteVisit;
