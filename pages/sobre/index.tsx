import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

const Sobre = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sobre</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <h3>SOBRE</h3>
                <h2>Um pouco sobre mim e a minha carreira...</h2>
                <div className={styles.txtImg}>
                    <Image src="images/imgPerfil.jpg" alt="" />
                    <div className={styles.txtSobre}>Desde pequeno sempre fui fascinado pelo avanço tecnologico, com a programação fui capaz de<br />
                        trabalhar com o que amo. Sou um desenvolvedor FullStack, formado em Analise e Desenvolvimento<br />
                        de Sistemas pela faculdade Signorelli, estudei atraves de cursos e fiz um bootcamp pela empresa<br />
                        Generation Brasil. Capcidade em desenvolver com diversas tecnologias mais pedidas no mercado.</div>
                </div>
            </div>
            <div className={styles.contactArea}>
                <div className={styles.contato}>
                    <Link href='/contato'>Entre em contato</Link>
                </div>
                <div className={styles.curriculo}>
                    <a href='curriculo.pdf' download>Download CV</a>
                </div>

            </div>
        </div>
    )
}

export default Sobre;