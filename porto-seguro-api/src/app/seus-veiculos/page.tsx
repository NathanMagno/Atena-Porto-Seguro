"use client"
import BgMeusVeiculos from "@/components/BgMeusVeiculos/BgMeusVeiculos"

import MeusVeiculosComponent from "@/components/MeusVeiculosComponent/MeusVeiculosComponent"
import { useEffect } from "react"
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde"

export default function MeusVeiculos() {

  useEffect(() => {
    document.title = "Meus Veículos"

  }, [])


  return (
    <>
      <CabecalhoVerde titulo="Meus Veículos" />

      <BgMeusVeiculos>
        <MeusVeiculosComponent />

      </BgMeusVeiculos>
    </>
  )
}
