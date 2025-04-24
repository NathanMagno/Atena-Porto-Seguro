"use client"
import Voltar from "@/icons/icons8-voltar-64.png"
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {

    const router = useRouter();

    const voltar = () => {
        router.back();
    }

    return (
        <>
        <header className="CabecalhoVerde">
            <div>
                <nav>
            <Image className="Voltar" alt="Voltar" src={Voltar} onClick={voltar}/>
                </nav>
            </div>
                <h1>{titulo}</h1>
        </header>
        </>
    )
}