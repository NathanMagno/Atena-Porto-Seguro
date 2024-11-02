interface FormularioEsqueciSenhaProps
{
  htmlFor ?: string;
  id?: string; 
  name: string;
  type: string;
  placeholder: string;
}

export default function FormularioEsqueciSenha({htmlFor , id , name,  type, placeholder}: FormularioEsqueciSenhaProps) {
  return (
    <>
      <div className="ContainerEntrada">
        <p/>
        <label htmlFor={htmlFor}>Email</label>
        <input className="Input" id={id} name={name} type={type} placeholder={placeholder} />
      </div>
    </>
  )
}