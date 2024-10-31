"use client"
import Funcionalidades from "@/components/Funcionalidades/Funcionalidades";
import IconeCarrro from "@/imgs/icons8-carro-50.png" ;
import IconeContato from "@/imgs/icons8-telefone-desligado-64.png" ;
import IconeAdd from "@/imgs/icons8-soma-30.png" ;
import { useEffect } from "react";


export default function Home() {

  useEffect (() => {
    document.title = "Home";
  }, []);

  return (
  <>
      <div>

      <Funcionalidades  nome="Seus veículos"
          icone={IconeCarrro} link="./login"/>

      <Funcionalidades  nome="Adicionar Veiculos"
          icone={IconeAdd} link=""/>

      <Funcionalidades  nome="Contato com suporte"
          icone={IconeContato} link=""/>

      </div>
  </>
  );
}
