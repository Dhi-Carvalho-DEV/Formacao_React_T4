import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"  
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Diogo!
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Diogo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante de Análise e Desenvolvimento de Sistemas na Uninassau - Unidade Aracaju, e tenho estudado também Desenvolvimento Web no Programa ONE, parceria entre a Oracle e a Alura.
      </p>
      <p className={styles.paragrafo}>
        Meu primeiro contato com programação foi através de um curso de Lógica de Programação e assim acabei me apaixonando por esse mundo. No momento estou estudando Programção Front End, mas tenho interesse em Back End, para me tornar um Dev FullStack.
      </p>
      <p className={styles.paragrafo}>
        Esse site tem o intuito de se tornar meu portfolio, onde vocês encontrarão alguns dos projetos que desenvolvi ao longo de minha jornada de aprendizado.
      </p>
    </PostModelo>
  )
}