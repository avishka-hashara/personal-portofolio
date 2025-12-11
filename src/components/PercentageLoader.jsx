import { useState, useEffect } from "react";
import Aurora from "./Aurora/Aurora";
import "./PercentageLoader.css";

const PercentageLoader = () => {
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Wait for fade out
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust interval for loading speed

    return () => clearInterval(interval);
  }, []);

  return (
    loading && (
      <div className="percentage-loader-container">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
          className="aurora-background"
        />
        <div className="loader-content">
          <h1 className="name-text">Avishka Hashara</h1>
          <div className="percentage-bar-container">
            <div
              className="percentage-bar"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="percentage-text">{percentage}%</div>
        </div>
      </div>
    )
  );
};

export default PercentageLoader;
