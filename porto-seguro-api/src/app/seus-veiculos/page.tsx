"use client"
import { useEffect } from "react";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import BgMeusVeiculos from "@/components/BgMeusVeiculos/BgMeusVeiculos";



export default function MeusVeiculos() {

    useEffect (() => {
        document.title = "Meus Veículos";
      }, []);

  return (
    <>
        <CabecalhoVerde titulo="Meus Veículos"/>
    
        <BgMeusVeiculos>
        {/* <MeusVeiculosComponent/> */}
        <p>a</p>
        </BgMeusVeiculos>
    </>
  )
}