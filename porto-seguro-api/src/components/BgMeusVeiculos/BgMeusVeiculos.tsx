import "@/app/styles/funcionalidades.css";

interface BgVeiculosProps {
  children: React.ReactNode;
}



export default function BgMeusVeiculos({ children }: BgVeiculosProps) {
  return (
    <>

      <div className="BgVeiculos">
        <main className="MainVeiculos">
          {children}
        </main>
      </div>


    </>
  )
}