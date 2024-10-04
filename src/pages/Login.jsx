import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // Importar el contexto

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(UserContext); // Obtener la función login del contexto

  const validarDatos = async (e) => {
    e.preventDefault();

    // Validaciones de los campos
    if (!email.trim() || !pass.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (pass.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    // Llamar a la función login del UserContext con los datos de email y password
    await login(email, pass); 

    // Opcional: redireccionar a otra página tras el login exitoso
    // Por ejemplo: history.push("/profile");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Ingresa una contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 text-center">Enviar</button>
      </form>
    </>
  );
};

export default Login;
