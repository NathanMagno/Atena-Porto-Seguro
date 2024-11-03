import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CabecalhoInicial() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout', {
            method: 'POST',
        });
        router.push('/login');
    };

    return (
        <>
            <header className="CabecalhoVerde">
                <Image className="LogoPorto"
                    src="/logo-portoseguro.webp" 
                    alt="Logo da Porto Seguro"    
                    width={300} 
                    quality={100} 
                    height={50} 
                />
                <div className="ContainerLgout" onClick={handleLogout}>
                    <p className="TxtPerfil">Sair</p>
                <Image 
                    src="/icons8-usuário-homem-com-círculo-50.png" 
                    alt="Perfil"     
                    width={50}  
                    height={50} 
                />
                </div>
            </header>
        </>
    );
}
