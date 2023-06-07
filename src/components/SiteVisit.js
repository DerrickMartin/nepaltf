import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

function SiteVisit() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Increment the visit count
    setVisitCount((prevCount) => prevCount + 1);

    // Send a pageview event to Google Analytics
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <h2>Total Site Visits</h2>
      <p>Count: {visitCount}</p>
    </div>
  );
}

export default SiteVisit;
