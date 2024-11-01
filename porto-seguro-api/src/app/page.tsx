"use client"
import Funcionalidades from "@/components/Funcionalidades/Funcionalidades";
import IconeCarrro from "@/icons/icons8-carro-50.png" ;
import IconeContato from "@/icons/icons8-telefone-desligado-64.png" ;
import IconeAdd from "@/icons/icons8-soma-30.png" ;
import { useEffect } from "react";
import BgInicial from "@/components/BgInicial/BgInicial";
import CabecalhoInicial from "@/components/CabecalhoInicial/CabecalhoInicial";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";



export default function Home() {

  useEffect (() => {
    document.title = "Home";
  }, []);

  const router = useRouter();

  const navegar = () => {
      router.push("./integrantes");
  };

  return (
  <>
   <CabecalhoInicial/>

<BgInicial>
      <Funcionalidades  nome="Seus veículos"
          icone={IconeCarrro} link="./login"/>

      <Funcionalidades  nome="Adicionar Veiculos"
          icone={IconeAdd} link=""/>

      <Funcionalidades  nome="Contato com suporte"
          icone={IconeContato} link=""/>

        

      </BgInicial>



  </>
  );
}
