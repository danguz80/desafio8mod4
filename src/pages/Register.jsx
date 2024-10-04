import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // Importar el contexto

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");
    
    const { register } = useContext(UserContext); // Obtener la función register del contexto

    const validarDatos = async (e) => {
        e.preventDefault();

        let html = "";
        let mensaje_error = document.querySelector("#esError");
        let mensaje_exito = document.querySelector("#exito");

        // Validaciones de los campos
        if (!email.trim() || !pass.trim() || !repass.trim()) {
            html += `Todos los campos son obligatorios.`;
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return;
        }
        if (pass.length < 6) {
            html += "La contraseña debe tener mínimo 6 caracteres.";
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return;
        }
        if (pass !== repass) {
            html += "Las contraseñas no coinciden.";
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return;
        }

        // Si las validaciones son correctas, llamar al método register del UserContext
        await register(email, pass); // Llamar a la función register

        // Mostrar mensaje de éxito
        html += `Datos ingresados exitosamente, formulario enviado.`;
        mensaje_exito.innerHTML = html;
        mensaje_error.innerHTML = null;

        // Limpiar los campos
        setEmail("");
        setPass("");
        setRepass("");
    };

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <p className="validacion_error" id="esError"></p>
                <p className="validacion_exito" id="exito"></p>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
                    type="email"
                    name="email" 
                    className="form-control" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Ingresa tu email"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu email con los demás.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    placeholder="Ingresa una contraseña"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirma la Contraseña</label>
                    <input 
                    type="password"
                    name="repassword" 
                    className="form-control"
                    onChange={(e) => setRepass(e.target.value)}
                    value={repass}
                    placeholder="Re-ingresa la contraseña"/>
                </div>

                <button type="submit" className="btn btn-primary mt-4 text-center">Enviar</button>
            </form>
        </>
    );
};

export default Register;
