import {  useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import "@/app/styles/funcionalidades.css"

export default function FormularioCadastroVeiculo() {

                         
    const [janelaCV, setCV] = useState<boolean>(false);
    const router = useRouter();

  const criarConta = () => {

    setCV(true);

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };


  return (
  
    <>

    <form>

        <div className="CadastrarVeiculosContainer">
          
          

            <div className="ContainerEntrada">
              <label htmlFor="chassi">Chassi</label>
                <input className="Input" id="chassi" name="chassi" type="text" placeholder="Informe o chassi" />
            </div>

            <div className="ContainerEntrada">
              <label htmlFor="placa">Placa</label>
                  <input className="Input" id="placa" name="placa" type="text" placeholder="Informe a placa" />
            </div>

                <div className="ContainerEntrada">
              <label htmlFor="marca">Marca</label>
                    <input className="Input" id="marca" name="marca" type="text" placeholder="Informe a marca" />
              </div>

                <div className="ContainerEntrada">
                <label htmlFor="modelo">Modelo</label>
                    <input className="Input" id="modelo" name="modelo" type="text" placeholder="Informe o modelo" />
              </div>


        <div className="ContainerEntrada">
              <label htmlFor="cor">Cor</label>
                    <input className="Input" id="cor" name="cor" type="text" placeholder="Informe a cor" />
                </div>




         
              
        </div>


    </form>
    <Modal isOpen={janelaCV} onClose={() => setCV(false)} titulo="Veículo cadastrado com sucesso!" info="Você será redirecionado para a página de login em 2 segundos."/>
                <Button titulo="Cadastrar" click={criarConta}/>
     </>
  )
}