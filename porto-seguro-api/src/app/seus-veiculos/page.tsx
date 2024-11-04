"use client"
import { useEffect, useState } from "react"
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde"
import BgMeusVeiculos from "@/components/BgMeusVeiculos/BgMeusVeiculos"
import { getCarros } from "@/services/Carros"
import Carro from "@/services/Types"

export default function MeusVeiculos() {

    useEffect  (() => {
        document.title = "Meus Veículos"

        fetchCarros()
      }, [])

      const [carros, setCarros] = useState<Carro[]>([])

    async function fetchCarros() {
        const promise = await getCarros()

        setCarros(promise)
    }

  return (
    <>
        <CabecalhoVerde titulo="Meus Veículos"/>
    
        <BgMeusVeiculos>
        {/* <MeusVeiculosComponent/> */}
        {!carros.length ? (
          <p>Loading...</p>
        ) : (
         
          carros.map((carro: Carro) => (
            <div key={carro.chassi}>
              <p>{carro.modelo}</p>
            </div>
          ))
        )}
        </BgMeusVeiculos>
    </>
  )
}
