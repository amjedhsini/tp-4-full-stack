import React, { useState } from "react";

function NotificationCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-container">
      <h3>Compteur de notifications</h3>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Marquer une notification lue
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px", backgroundColor: "#ccc" }}
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default NotificationCounter;
