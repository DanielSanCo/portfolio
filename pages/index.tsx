import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ProjetosList } from '../utils/projetos'

/*
1 - Liste as suas habilidades mais relevantes
  A - quem sou: faça uma apresentação breve, deixando claro quem você é, incluindo o tipo de trabalho que busca e as certificações importantes. Utilize um tom mais pessoal e não deixe de evidenciar traços de personalidade que separam você do restante;
  B - contato: coloque os formulários para que o envio de mensagens seja facilitado. Inclua, ainda, os links para seus perfis em redes sociais e acesso ao download do seu currículo;
  C - trabalhos e projetos: você se orgulha de quais projetos? Você domina quais linguagens? Isso é o que precisa aparecer aqui. Não deixe de fornecer o contexto do projeto e os resultados. Lembre-se de que os recrutadores não desejam ler apenas uma descrição do produto final, mas sim como você contribuiu.

2 - Faça links para redes sociais profissionais
  A - Jamais subestime a importância de um perfil no LinkedIn. Os recrutadores geralmente conferem se as informações estão coerentes e analisam as indicações e o networking. Então, fique atento a esses detalhes.
  
*/

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.initialPage}>
          <div className={styles.initialInfoPageArea}>
            <div className={styles.initialInfoPage}>
              <h2>Olá!</h2>
              <h4>Eu me chamo Daniel</h4>
              <p>Programador Web com conhecimento sobre diversas das <span><a href='/'>Tecnologias</a></span> mais utilizadas no mercado.</p>
              <div className={styles.curriculo}>Curriculo</div>
            </div>
            <div className={styles.intialInfoPageImg}>
            </div>
            <div className={styles.initialInfoPage}>
              <h2>Desenvolvedor</h2>
              <h4>Desenvolvedor FullStack</h4>
              <p>Crio sites para sua empresa ou negócio, sites que poderão ser usados em qualquer celular, atraia seus clientes com sites profissionais desenvolvidos por quem entende.</p>
            </div>
          </div>
        </div>

        <div className={styles.fakeHome}></div>

        <div className={styles.siteArea}>

          <div className={styles.pageTitle}>
            <div className={styles.line}></div>
            <div>Alguns dos meus Projetos</div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.projetosList}>
            {ProjetosList.map((item, index) => (
              <div className={styles.eachProject} key={index}>{item.name}</div>
            ))}
          </div>

          <div className={styles.tecnologias}>
            <h2>Tecnologias</h2>
          </div>

          <div className={styles.sobre}>
            <h2>sobre</h2>
          </div>

        </div>


      </main>


    </div>
  )
}

export default Home
