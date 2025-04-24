"use client"
import { useEffect } from "react";


import Button from "@/components/Button/Button";
import BgGradient from "@/components/BgGradient/BgGradient";
import RodapeCadastro from "@/components/RodapeCadastro/RodapeCadastro";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import { useRouter } from "next/navigation";
import FormularioEsqueciSenha from "@/components/FormularioEsqueciSenha/FormularioEsqueciSenha";


export default function EsqueciSenha() {
    
    
    useEffect (() => {
        document.title = "Esqueci Senha";
      }, []);

      const router = useRouter();

    const irRedefinirSenha = () => 
    (
      router.push("./esqueci-senha/redefinir-senha")
    )

  return (
    <>
      <CabecalhoAzul titulo="Esqueci Senha"/> 

      <BgGradient>

          <FormularioEsqueciSenha htmlFor="emailE" id="emailE" name="email" placeholder="Informe seu Email" type="email"/>
          <Button click={irRedefinirSenha} titulo="Enviar"/>
            <RodapeCadastro link1="/login/criar-conta" link2="/login" nomeLink1="Criar Conta" nomeLink2="Voltar"/>
      </BgGradient>
   </>
  )
}