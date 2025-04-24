import Button from "../Button/Button";



export default function InteracaoChatBot() {
  return (
    <>  
    
     <div className="ChatContainer">

            <div className="ChatBox"></div>

        <div className="ContainerMensagem">
           
            <input className="UserInput" placeholder="Informe sua dúvida"type="text" name="mensagem"/>

            <Button titulo="Enviar"/>
        
          </div>

    </div>
    
    </>
  )
}