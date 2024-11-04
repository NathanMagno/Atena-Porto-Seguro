import Lixeira from "@/icons/icons8-lixeira-30.png"
import { getCarros } from "@/services/Carros"
import Carro from "@/services/Types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function MeusVeiculosComponent() {

    useEffect(() => {

        fetchCarros()
    }, [])

    const [carros, setCarros] = useState<Carro[]>([])

    async function fetchCarros() {
        const promise = await getCarros()

        setCarros(promise)

    }



    return (
        <>

            <div className="VeiculosContainer">

                {!carros.length ? (
                    <h1 className="bg-oxigenio ">Loading...</h1>
                ) : (

                    carros.map((carro: Carro) => (
                        <div key={carro.chassi} className="Veiculo">
                            <div className="ModeloVeiculo">
                                <p>{carro.modelo}</p>
                            </div>
                            <div className="EditarVeiculo">
                                <Image alt="Deletar" src={Lixeira} />
                                <p className="EditarVeiculo">Editar</p>
                            </div>
                        </div>
                    ))
                )}


            </div>
        </>

    )
}