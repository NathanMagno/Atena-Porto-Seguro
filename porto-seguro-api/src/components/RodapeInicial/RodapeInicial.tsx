import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function RodapeInicial() {
  const router = useRouter();

  const navegar = () => {
    router.push("./integrantes");
  };

  return (
    <footer className="RodapeInicial">
      <section className="SectionRodape">
        <article className="ConteudoRodapeInicial">
          <h1 className="TituloInforma">Seus Veículos</h1>
          <p>
            Para você visualizar todos os seus veículos cadastrados em sua conta.
          </p>
        </article>

        <article className="ConteudoRodapeInicial">
          <h1 className="TituloInforma">Adicionar Veículos</h1>
          <p>
            Para você poder cadastrar seus veículos, preenchendo os campos solicitados.
          </p>
        </article>

        <article className="ConteudoRodapeInicial">
          <h1 className="TituloInforma" >Contato com Suporte</h1>
          <p>
            Nosso canal de contato com um suporte por chat com uma IA que vai
            atender todas as suas dúvidas em relação à plataforma.
          </p>
        </article>
      </section>

      <Button click={navegar} titulo="Integrantes" />
    </footer>
  );
}
