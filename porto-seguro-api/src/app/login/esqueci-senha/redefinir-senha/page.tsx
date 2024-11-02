"use client"
import BgGradient from "@/components/BgGradient/BgGradient";
import Button from "@/components/Button/Button";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import FormularioEsqueciSenha from "@/components/FormularioEsqueciSenha/FormularioEsqueciSenha";
import Modal from "@/components/Modal/Modal";
import RodapeCadastro from "@/components/RodapeCadastro/RodapeCadastro";
import TextoInformativo from "@/components/TextoInformativo/TextoInformativo";
import { useEffect, useState } from "react";



export default function RedefinirSenha() {

    useEffect (() => {
        document.title = "Redefinir Senha";
      }, []);


      const [janelaCC, setCC] = useState(false); 



      const novaSenha = () => {
    
        setCC(true);
    
      };

  return (
    <>
      <CabecalhoAzul titulo="Redefinir senha"/>

      <BgGradient>
        <TextoInformativo texto="Informe o código de recuperação que foi enviado ao seu email vincúlado"/>
        <FormularioEsqueciSenha  name="codigo" type="number" placeholder="Insira o código"/>

        <Button click={novaSenha} titulo="Validar"/>
        <Modal form isOpen={janelaCC} onClose={() => setCC(false)} titulo="Código Válidado com Sucesso"/>

        <RodapeCadastro link1="/login/criar-conta" link2="/login" nomeLink1="Criar Conta" nomeLink2="Voltar"/>
        </BgGradient>
    </>
  )
}