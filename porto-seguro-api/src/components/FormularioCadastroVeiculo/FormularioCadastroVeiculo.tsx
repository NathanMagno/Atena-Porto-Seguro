import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import "@/app/styles/funcionalidades.css";
import { novoCarro } from "@/services/Carros";
import Carro from "@/services/Types";

export default function FormularioCadastroVeiculo() {
  const [carro, setCarro] = useState<Carro>({
    chassi: "",
    motor: "",
    placa: "",
    marca: "",
    modelo: "",
    cor: "",
  });
  const [erros, setErros] = useState<string[]>([]);
  const [janelaCV, setCV] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validarFormulario = () => {
    const mensagensErros: string[] = [];

    if (!carro.chassi) mensagensErros.push("Chassi é obrigatório.");
    if (!carro.placa) mensagensErros.push("Placa é obrigatória.");
    if (!carro.marca) mensagensErros.push("Marca é obrigatória.");
    if (!carro.modelo) mensagensErros.push("Modelo é obrigatório.");
    if (!carro.cor) mensagensErros.push("Cor é obrigatória.");

    setErros(mensagensErros);

    return mensagensErros.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      await novoCarro(carro);
      setCV(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.error("Falha no cadastramento:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          {erros.length > 0 && (
            <div className="ErrosContainer">
              {erros.map((erro, index) => (
                <p key={index} className="ErroMensagem">
                  {erro}
                </p>
              ))}
            </div>
          )}
        <div className="CadastrarVeiculosContainer">

          <div className="ContainerEntrada">
            <label htmlFor="chassi">Chassi</label>
            <input
              className="Input"
              id="chassi"
              name="chassi"
              type="text"
              placeholder="Informe o chassi"
              value={carro.chassi}
              onChange={handleChange}
            />
          </div>

          <div className="ContainerEntrada">
            <label htmlFor="placa">Placa</label>
            <input
              className="Input"
              id="placa"
              name="placa"
              type="text"
              placeholder="Informe a placa"
              value={carro.placa}
              onChange={handleChange}
            />
          </div>

          <div className="ContainerEntrada">
            <label htmlFor="marca">Marca</label>
            <input
              className="Input"
              id="marca"
              name="marca"
              type="text"
              placeholder="Informe a marca"
              value={carro.marca}
              onChange={handleChange}
            />
          </div>

          <div className="ContainerEntrada">
            <label htmlFor="modelo">Modelo</label>
            <input
              className="Input"
              id="modelo"
              name="modelo"
              type="text"
              placeholder="Informe o modelo"
              value={carro.modelo}
              onChange={handleChange}
            />
          </div>

          <div className="ContainerEntrada">
            <label htmlFor="cor">Cor</label>
            <input
              className="Input"
              id="cor"
              name="cor"
              type="text"
              placeholder="Informe a cor"
              value={carro.cor}
              onChange={handleChange}
            />
          </div>

          <div className="ContainerEntrada">
            <label htmlFor="motor">Motor</label>
            <input
              className="Input"
              id="motor"
              name="motor"
              type="text"
              placeholder="Informe o motor"
              value={carro.motor}
              onChange={handleChange}
            />
          </div>

        </div>

        

        <Button titulo="Cadastrar" />
      </form>

      <Modal
        isOpen={janelaCV}
        onClose={() => setCV(false)}
        titulo="Veículo cadastrado com sucesso!"
        info="Você será redirecionado para a página de login em 2 segundos."
      />
    </>
  );
}
