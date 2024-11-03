

interface BgVeiculosProps {
  children: React.ReactNode;
}



export default function BgMeusVeiculos({children}:BgVeiculosProps) {
  return (
        <>
        
            <div  className="BgVeiculos">
                 
                        {children}

            </div>
        
        
        </>
  )
}