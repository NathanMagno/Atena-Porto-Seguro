import { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";


export default function FormularioCriarConta() {
  const [janelaCC, setCC] = useState(false); 
  const router = useRouter();

  const criarConta = () => {

    setCC(true);

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <>
      <form className="FormularioCC">
        <div className="ContainerEntrada">
          <label htmlFor="nome">Nome</label>
          <input
            className="Input"
            id="nome"
            name="nome"
            type="text"
            placeholder="Informe seu Nome"
          />
        </div>

        <div className="ContainerEntrada">
          <label htmlFor="emailCC">Email</label>
          <input
            className="Input"
            id="emailCC"
            name="email"
            type="email"
            placeholder="Informe seu Email"
          />
        </div>

        <div className="ContainerEntrada">
          <label htmlFor="senhaCC">Senha </label>
          <input
            className="Input"
            id="senhaCC"
            name="senha"
            type="password"
            placeholder="Crie uma senha forte"
          />
        </div>
      </form>

      <Button click={criarConta} titulo="Criar" />

      <Modal isOpen={janelaCC} onClose={() => setCC(false)} titulo="Conta criada com sucesso!" info="Você será redirecionado para a página de login em 2 segundos."/>
    </>
  );
}
