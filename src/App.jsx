import React, { useState } from "react";
import Time from "./components/Time";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import UserList from "./components/UserList";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import Notifications from "./components/Notifications";
import NotificationCounter from "./components/NotificationCounter";

function App() {
  const [current, setCurrent] = useState(null);

  const renderExercise = () => {
    switch (current) {
      case 1:
        return <Time />;
      case 2:
        return (
          <ThemeProvider>
            <ThemeToggle />
          </ThemeProvider>
        );
      case 3:
        return <UserList />;
      case 4:
        return (
          <UserProvider>
            <div>
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                TP Application — Profil et Notifications
              </h2>
              <UserProfile />
              <Notifications />
              <NotificationCounter />
            </div>
          </UserProvider>
        );
      default:
        return (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>TP4 — Exercices React Hooks</h1>
            <p style={{ marginBottom: "25px" }}>
              Choisissez un exercice à lancer :
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <button onClick={() => setCurrent(1)}>Exercice 1 — Horloge</button>
              <button onClick={() => setCurrent(2)}>Exercice 2 — Thème</button>
              <button onClick={() => setCurrent(3)}>Exercice 3 — Utilisateurs</button>
              <button onClick={() => setCurrent(4)}>TP Application</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {current !== null && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button onClick={() => setCurrent(null)}>⬅ Retour au menu</button>
        </div>
      )}
      {renderExercise()}
    </div>
  );
}

export default App;
