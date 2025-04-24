import "../../app/styles/tela-inicial.css"

interface BgInicialProps {
    children: React.ReactNode;
}


export default function BgInicial({ children }: BgInicialProps) {
    return (
        <>

                <div className="FundoInicial">
              
            <main>

                    <div className="servicosContainer">
                        {children}
                    </div>
            </main>

                </div>


        </>
    )
}