// components/FormularioLogin/FormularioLogin.tsx
import { FormEvent, useState } from "react";
import Button from "../Button/Button";

interface FormularioLoginProps {
    onLoginSuccess: () => void; // Definindo o tipo da prop
}

export default function FormularioLogin({ onLoginSuccess }: FormularioLoginProps) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: email, password: senha }),
        });

        if (response.ok) {
            onLoginSuccess();
        } 
     
    };

    return (
        <form onSubmit={handleSubmit} className="Formulario">
            <div className="ContainerEntrada">
                <label htmlFor="email">Email</label>
                <input
                    className="Input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="ContainerEntrada">
                <label htmlFor="senha">Senha</label>
                <input
                    className="Input"
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </div>
            <Button type="submit"   titulo="Entrar"/>
               
      
        </form>
    );
}
