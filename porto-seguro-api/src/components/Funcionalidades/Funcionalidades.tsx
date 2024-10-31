"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "@/app/styles/tela-inicial.css"
 

interface FuncionalidadesProps {
    nome: string;
    icone: string | StaticImport;
    link: string;
}

export default function Funcionalidades({ nome, icone, link }: FuncionalidadesProps) {
    const router = useRouter();

    const navegar = () => {
        router.push(link);
    };

    return (
        <div className="servico" onClick={navegar}>
            <div className="iconeServico">
                <Image src={icone}  alt={"Ícone do servico " + nome}/>
            </div>
            <div>
                <h3 className="tituloServico">{nome}</h3>
            </div>
        </div>
    );
}