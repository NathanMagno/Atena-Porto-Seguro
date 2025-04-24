import "../../app/styles/cadastro.css";

interface BgGradientProps {
    children: React.ReactNode;
  }
  
  export default function BgIntegrantes({children}: BgGradientProps) {
    return (
      <div className="BgIntegrantes">
        <main>
          {children}
        </main>
      </div>
    );
  }
  