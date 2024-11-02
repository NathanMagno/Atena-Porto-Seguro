"use client"
import BgGradient from "@/components/BgGradient/BgGradient";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import FormularioCriarConta from "@/components/FormularioCriarConta/FormularioCriarConta";
import { useEffect } from "react";


export default function CriarConta() {


    useEffect (() => {
        document.title = "Criar Conta";
      }, []);

  
  return (
    <>
       <CabecalhoAzul titulo="Criar Conta"/>
       <BgGradient>


       <FormularioCriarConta/>
        
     
      </BgGradient>
    </>
  )
}