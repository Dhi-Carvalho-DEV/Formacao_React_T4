import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Sou o Dhi Carvalho, estudante de Análise e Desenvolvimento de Sistemas, e entuasiasta por Programação Web, tanto na parte Front End quanto no Back End.
        </p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden= {true}
          alt=''
        />
        <img 
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Dhi Carvalho'
        />
      </div>
    </div>
  )
}