// app/login/page.tsx
"use client";

import BgGradient from "@/components/BgGradient/BgGradient";
import CabecalhoAzul from "@/components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "@/components/FormularioLogin/FormularioLogin";
import RodapeCadastro from "@/components/RodapeCadastro/RodapeCadastro";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();

    const handleLoginSuccess = () => {
        router.push("/"); 
    };

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <>
            <CabecalhoAzul titulo="Login" />
            <BgGradient>
                <FormularioLogin onLoginSuccess={handleLoginSuccess} />
                <RodapeCadastro
                    link1="/login/esqueci-senha"
                    link2="/login/criar-conta"
                    nomeLink1="Esqueci minha senha"
                    nomeLink2="Criar Conta"
                />
            </BgGradient>
        </>
    );
}
