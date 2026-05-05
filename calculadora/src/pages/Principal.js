import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Principal() {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function buscarDados() {
      const user = auth.currentUser;

      if (!user) {
        console.log("Usuário não logado");
        return;
      }

      try {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDados(docSnap.data());
        }
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }

    buscarDados();
  }, []);

  async function logout() {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  if (!dados) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
      <h1>Página Principal</h1>

      <p>Nome: {dados.nome}</p>
      <p>Sobrenome: {dados.sobrenome}</p>
      <p>Data: {dados.data}</p>

      <button onClick={logout}>Voltar ao Login</button>
    </div>
  );
}

export default Principal;