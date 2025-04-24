import "../../app/styles/cadastro.css";

interface BgGradientProps {
    children: React.ReactNode;
  }
  
  export default function BgGradient({children}: BgGradientProps) {
    return (
      <div className="Gradient">
        <main>
          {children}
        </main>
      </div>
    );
  }
  