import "../../app/styles/cadastro.css"

export default function FormularioLogin() {
    return (
        <>

            <form className="Formulario">
                <div className="ContainerEntrada">

                    <label htmlFor="email">Email</label>
                    <input className="Input" id="email" name="email" type="email" placeholder="Digite seu Email" />
                </div>
                <div className="ContainerEntrada">

                    <label htmlFor="senha">Senha</label>
                    <input className="Input" id="senha" name="senha" type="password" placeholder="Digite sua senha" />
                </div>

            </form>

        </>
    )
}

<input type="text" />