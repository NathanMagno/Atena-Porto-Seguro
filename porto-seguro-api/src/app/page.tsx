"use client"
import Funcionalidades from "@/components/Funcionalidades/Funcionalidades";
import Icone from "@/imgs/icons8-carro-50.png" ;
import { useEffect } from "react";



export default function Home() {

  useEffect (() => {
    document.title = "Home";
  }, []);

  return (
  <>
      <div>

      <Funcionalidades  nome="Seus veículos"
          icone={Icone} link=""/>

      <Funcionalidades  nome="Seus veículos"
          icone={Icone} link=""/>

      <Funcionalidades  nome="Seus veículos"
          icone={Icone} link=""/>


      </div>
  </>
  );
}
