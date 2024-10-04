import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Importar el contexto

const Profile = () => {
  const { email, logout } = useContext(UserContext); // Obtener el email y logout del contexto

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Llamar a la función logout cuando se presiona el botón
    // Opcional: redireccionar al login o página principal después de cerrar sesión
  };

  return (
    <form>
      <fieldset disabled>
        <legend>Usuario Registrado</legend>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={email} // Mostrar el email del usuario autenticado
          />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </form>
  );
};

export default Profile;
