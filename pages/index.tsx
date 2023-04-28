import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { ProjetosList } from '../utils/projetos'
import tecList from '../utils/tecnologias'
import InfoProjeto from '../utils/infoProjeto'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  const [display, setDisplay] = useState('none')

  const changeDisplay = () => {
    display === 'none' ? setDisplay('flex') : setDisplay('none')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.infoProjeto} style={{ display: display }}>
        <div className={styles.info}>
          <div className={styles.close} onClick={() => changeDisplay()}>X</div>
          <div className={styles.projetoInfo}>
            <div>
              <h2>{InfoProjeto[0].name}</h2>
              <span className={styles.imgDesc}>{InfoProjeto[0].desc}</span>
            </div>
            <div>
              <Image src={InfoProjeto[0].img} alt=""/>
              <span className={styles.imgDesc}>{InfoProjeto[0].imgdesc}</span>
            </div>
            <div>
              {InfoProjeto[0].name}
              <div className={styles.buttonInfo}><Link href={InfoProjeto[0].link} target='_blank'>Abrir Projeto</Link></div>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.initialPage}>
          <div className={styles.initialInfoPageArea}>
            <div className={styles.initialInfoPage}>
              <h2>Olá!</h2>
              <h4>Eu me chamo Daniel</h4>
              <p>Programador Web com conhecimento sobre diversas das <span><Link href='/'>Tecnologias</Link></span> mais utilizadas no mercado.</p>
              <div className={styles.curriculo}><Link href='curriculo.pdf' download>Download CV</Link></div>
            </div>
            <div className={styles.intialInfoPageImg}>
              <Image src="images/imgPerfil.jpg" alt="" />
            </div>
            <div className={styles.initialInfoPage}>
              <h2>Desenvolvedor</h2>
              <h4>Desenvolvedor FullStack</h4>
              <p>Crio sites para sua empresa ou negócio, sites que poderão ser usados em qualquer celular, atraia seus clientes com sites profissionais desenvolvidos por quem entende.</p>
            </div>
          </div>
          <div className={styles.blackBack}></div>
          <Image src="https://www.ft.unicamp.br/sites/default/files/tads.jpg" alt="" className={styles.imgFundo} />
        </div>

        <div className={styles.fakeHome}></div>

        <div className={styles.siteArea}>

          <div className={styles.pageTitle}>
            <div className={styles.line}></div>
            <div>Projetos em destaque</div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.projetosList}>
            {ProjetosList.map((item, index) => (
              <div className={styles.eachProject} key={index}>
                <div>{item.name}</div>
                <Image src={item.img} alt="" />
                <Link href={item.link} target="_blank"><div>Abrir projeto</div></Link>
                <a style={{ cursor: 'pointer' }}><div onClick={() => changeDisplay()}>Abrir informações</div></a>
              </div>
            ))}
          </div>

          <div className={styles.tecnologias}>
            <h2>Tecnologias</h2>
            <div className={styles.tecList}>
              {tecList.map((item, index) => (
                <div className={styles.eachTec} key={index}>
                  <Image src={item.img} alt={item.img} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sobre}>
            <h2>Sobre o desenvolvedor</h2>
            <p>Desde pequeno sempre fui fascinado pelo avanço tecnologico, com a programação fui capaz de<br />
              trabalhar com o que amo. Sou um desenvolvedor FullStack, formado em Analise e Desenvolvimento<br />
              de Sistemas pela faculdade Signorelli, estudei atraves de cursos e fiz um bootcamp pela empresa<br />
              Generation Brasil. Capcidade em desenvolver com diversas tecnologias mais pedidas no mercado.<br /></p>
          </div>

          <Footer />

        </div>


      </main>


    </div>
  )
}

export default Home
