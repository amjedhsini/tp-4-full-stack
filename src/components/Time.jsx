import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Exercice 1 — Horloge</h2>
      <p>Heure actuelle : {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Time;
