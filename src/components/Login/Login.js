import { useRef, useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [registro, setRegistro] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const changeEmailHandler = (event) => {
        if (event.target.value === "") {
            emailRef.current.style.borderColor = "red";
            emailRef.current.style.outline = "none";
        } else {
            emailRef.current.style.borderColor = "";
            emailRef.current.style.outline = "";
        }
        SetEmail(event.target.value);
    };
    const changePasswordHandler = (event) => {
        if (event.target.value === "") {
            passwordRef.current.style.borderColor = "red";
            passwordRef.current.style.outline = "none";
        } else {
            passwordRef.current.style.borderColor = "";
            passwordRef.current.style.outline = "";
        }
        SetPassword(event.target.value);
    };

    const singInHandler = () => {
        setRegistro(true);
        if (email === "") {
            emailRef.current.focus();
            emailRef.current.style.borderColor = "red";
            emailRef.current.style.outline = "none";
            return;
        }
        if (password === "") {
            passwordRef.current.focus();
            passwordRef.current.style.borderColor = "red";
            passwordRef.current.style.outline = "none";
            return;
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h4>¡Bienvenidos a Book Champions!</h4>
                <div className="input-container">
                    <input
                        className="input-control"
                        placeholder="Email"
                        type="email"
                        ref={emailRef}
                        onChange={changeEmailHandler}
                    />
                </div>
                {registro === true && email === "" ? (
                    <p>dato obligatorio</p>
                ) : (
                    <></>
                )}
                <div className="input-container">
                    <input
                        className="input-control"
                        placeholder="Password"
                        type="password"
                        ref={passwordRef}
                        onChange={changePasswordHandler}
                    />
                </div>
                {registro === true && password === "" ? (
                    <p>dato obligatorio</p>
                ) : (
                    <></>
                )}
                <button
                    className="signin-button"
                    type="button"
                    onClick={singInHandler}
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
};

export default Login;
