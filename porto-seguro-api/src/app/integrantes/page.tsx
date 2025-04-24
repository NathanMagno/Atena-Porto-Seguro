"use client"
import BgIntegrantes from "@/components/BgIntegrantes/BgIntegrantes";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import InfoIntegrantes from "@/components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "@/components/IntegrantesTopo/IntegrantesTopo";
import RodapeIntegrantes from "@/components/RodapeIntegrantes/RodapeIntegrantes";
import { useEffect } from "react";



export default function Integrantes() {

    useEffect (() => {
        document.title = "Integrantes";
      }, []);

  return (
    <>
      <CabecalhoAzul titulo="Integrantes" />
      <BgIntegrantes>

        <IntegrantesTopo />
        <InfoIntegrantes/>
        <RodapeIntegrantes/>

      </BgIntegrantes>

    </>
  )
}