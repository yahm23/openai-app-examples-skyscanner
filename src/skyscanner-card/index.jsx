import React from "react";
import { createRoot } from "react-dom/client";
import PlaneIcon  from '../plane.svg?react';

function App() {
  return (
      <div className="card-container">
          <div className="flex flex-col pt-8">
              <div className="pill">Cheapest</div>
              <div className="mt-8 mb-6">
                  <p className="text-sk-main">One way • January</p>
                  <p className="text-sk-large">£35</p>
                  <p className="text-sk-pill text-sk-grey">per adult</p>
              </div>
              <div className="flex flex-row justify-center gap-x-2 items-center">
                  <p className="font-semibold">LGW</p>
                  <div className="line-divider"></div>
                    <PlaneIcon/>
                  <div className="line-divider"></div>
                  <p className="font-semibold">BCN</p>
              </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
              <button className="blue-button">Compare prices on Skyscanner</button>
              <button className="base-button">View on a calendar</button>
          </div>
      </div>
  );
}

createRoot(document.getElementById("skyscanner-card-root")).render(<App />);

