import React, { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        "Bienvenue dans l'application !",
        "Nouveau message reçu",
        "Mise à jour disponible 🚀",
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center" }}>
        Chargement des notifications...
      </p>
    );

  return (
    <div className="exercise-container">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
