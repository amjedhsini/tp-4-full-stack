import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);

  return (
    <div className="exercise-container">
      <h2>Profil Utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>
        Statut :{" "}
        <strong style={{ color: user.connected ? "green" : "red" }}>
          {user.connected ? "Connecté" : "Déconnecté"}
        </strong>
      </p>
      <button onClick={toggleConnection}>
        {user.connected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

export default UserProfile;
