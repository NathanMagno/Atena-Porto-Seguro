
import { getCarros } from "@/services/Carros"
import Carro from "@/services/Types"

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
                    <h1 className="text-oxigenio text-2xl">Loading...</h1>
                ) : (

                    carros.map((carro: Carro) => (
                        <div key={carro.chassi} className="Veiculo">
                            <div className="ModeloVeiculo">
                                <p className="text-porto xl:text-[24px] font-bold">{carro.modelo}</p>
                            </div>
                            <div className="EditarVeiculo">
                                <p className="Opcao OpcaoExcluir">Excluir</p>
                                <p className="Opcao OpcaoEditar">Editar</p>
                            </div>
                        </div>
                    ))
                )}


            </div>
        </>

    )
}