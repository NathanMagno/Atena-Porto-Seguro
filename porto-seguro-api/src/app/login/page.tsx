"use client"

import BgGradient from "@/components/BgGradient/BgGradient";
import Button from "@/components/Button/Button";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "@/components/FormularioLogin/FormularioLogin";
import RodapeCadastro from "@/components/RodapeCadastro/RodapeCadastro";
import { useEffect } from "react";


export default function Login() {



    useEffect (() => {
        document.title = "Login";
      }, []);

      return (
        <>
          <CabecalhoAzul titulo="Login" />
          <BgGradient>
    
    
            <FormularioLogin />
    
            <Button click={()=>{}} titulo="Entrar" />
    
            <RodapeCadastro link1="./recuperar/senha" link2="./criar/conta"
              nomeLink1="Esqueci minha senha" nomeLink2="Criar Conta" />
          </BgGradient>
    
    
        </>
  )
}