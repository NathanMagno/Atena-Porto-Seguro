"use client"
import BgGradient from "@/components/BgGradient/BgGradient";
import CabecalhoVerde from "@/components/CabecalhoVerde/CabecalhoVerde";
import FormularioCadastroVeiculo from "@/components/FormularioCadastroVeiculo/FormularioCadastroVeiculo"
import { useEffect } from "react";


export default function AdicionarVeiculos() {

    useEffect (() => {
        document.title = "Adicionar Veículo";
      }, []);
    


  return (
    <>



    <CabecalhoVerde titulo="Adiconar Veículos"/>


      <BgGradient>

      <FormularioCadastroVeiculo/>
          

      </BgGradient>
    </>
  )
}