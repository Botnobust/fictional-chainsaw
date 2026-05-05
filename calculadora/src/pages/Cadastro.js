import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Nav from "../components/Nav";

console.log("CADASTRO");

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState("");

  async function cadastrar() {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, senha);

      await setDoc(doc(db, "usuarios", user.user.uid), {
        nome,
        sobrenome,
        data,
        uid: user.user.uid,
      });

      alert("Cadastro realizado!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Nav />
      <h1>Cadastro</h1>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} />
      <input placeholder="nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input type="date" onChange={(e) => setData(e.target.value)} />

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;