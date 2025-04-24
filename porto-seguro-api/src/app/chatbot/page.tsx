"use client"
import BgGradient from "@/components/BgGradient/BgGradient";
import CabecalhoVerde from "@/components/CabecalhoVerde/CabecalhoVerde";
import InteracaoChatBot from "@/components/InteracaoChatBot/InteracaoChatBot";
import { useEffect } from "react";
import "@/app/styles/funcionalidades.css"



export default function ChatBot() {

    
  useEffect (() => {
    document.title = "Obter Ajuda";
  }, []);


  return (
    <>
      <CabecalhoVerde titulo="Contato com Suporte"/>
    
      <BgGradient>

        <InteracaoChatBot/>

      </BgGradient>
    
    </>
  )
}