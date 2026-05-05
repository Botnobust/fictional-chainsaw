console.log("PRINCIPAL");
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Principal() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    async function carregar() {
      const user = auth.currentUser;

      if (user) {
        const ref = doc(db, "usuarios", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setDados(snap.data());
        }
      }
    }

    carregar();
  }, []);

  return (
    <div>
      <h1>Principal</h1>

      <p>Nome: {dados.nome}</p>
      <p>Sobrenome: {dados.sobrenome}</p>
      <p>Data: {dados.data}</p>
    </div>
  );
}

export default Principal;