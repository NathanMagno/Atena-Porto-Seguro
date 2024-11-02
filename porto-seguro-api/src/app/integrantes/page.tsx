"use client"
import BgIntegrantes from "@/components/BgIntegrantes/BgIntegrantes";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import IntegrantesTopo from "@/components/IntegrantesTopo/IntegrantesTopo";
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
        {
            //<InfoIntegrantes/>
            }

      </BgIntegrantes>

    </>
  )
}