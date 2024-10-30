import { useNavigate } from "react-router-dom";

interface FuncionalidadesProps {
    cor: string;
    nome: string;
    icone: string | React.ReactNode;
    link: string;
}



export default function Funcionalidades({ cor, nome, icone, link }: FuncionalidadesProps) {
    const navigate = useNavigate();

    const navegar = () => {
        navigate(link);
    };

    return (

        <div className= {'flex items-center justify-between cursor-pointer text-white mt-[5vh]  rounded-r-full p-[8vw] transition-all duration-200 ease-in hover:bg-black bg-[${cor}] w-[1300px] h-[120px] text-[50px] max-w-[1440px]:w-[700px] max-w-[1440px]:h-[100px] max-w-[1440px]:text-[30px] max-w-[761px]:w-[400px] max-w-[761px]:h-[80px] max-w-[761px]:text-[20px] max-w-[564px]:w-[320px] max-w-[564px]:h-[80px] max-w-[564px]:text-[14px]'} >
            
    </div>    
);
}
