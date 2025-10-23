import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="exercise-container">
      <h2>Exercice 2 — Thème global</h2>
      <p>Thème actuel : <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

export default ThemeToggle;
