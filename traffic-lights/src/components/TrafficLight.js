import { useEffect, useState } from "react";
import './TrafficLight.css'

const TrafficLight = () => {
  const lights = [
    { color: "red", duration: 4000 },
    { color: "yellow", duration: 500 },
    { color: "green", duration: 3000 },
  ];

  const [currentLightIndex, setCurrentLightIndex] = useState(0);

  useEffect(() => {
    const currentLight = lights[currentLightIndex];
    const timer = setTimeout(() => {
      setCurrentLightIndex((currentLightIndex + 1) % lights.length);
    }, currentLight.duration);

    return () => clearTimeout(timer);
  }, [currentLightIndex]);

  return (
    <div className="traffic-light">
      {lights.map((light, index) => (
        <div
          key={index}
          className={`light ${light.color} ${
            index === currentLightIndex ? "" : "nonactive"
          }`}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
