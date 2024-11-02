import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CabecalhoInicial() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout', {
            method: 'POST',
        });
        // Redireciona para a página de login após o logout
        router.push('/login');
    };

    return (
        <>
            <header className="CabecalhoVerde">
                <Image 
                    src="/logo-portoseguro.webp" 
                    alt="Logo da Porto Seguro"    
                    width={300} 
                    quality={100} 
                    height={50} 
                />
                <Image 
                    className="cursor-pointer" 
                    onClick={handleLogout} // Chama a função de logout ao clicar
                    src="/icons8-usuário-homem-com-círculo-50.png" 
                    alt="Perfil"     
                    width={50}  
                    height={50} 
                />
            </header>
        </>
    );
}
