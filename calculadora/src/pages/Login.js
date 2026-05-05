import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

console.log("LOGIN");

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch {
      setErro("Usuário não cadastrado!");
    }
  }

  return (
    <div>
      <Nav />
      <h1>Login</h1>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} />

      <button onClick={login}>Acessar</button>

      <p>{erro}</p>
    </div>
  );
}

export default Login;