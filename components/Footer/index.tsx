import Image from 'next/image';
import styles from './style.module.css';

const navList = [
    { name: 'Home', img: '', link: '/' },
    { name: 'Projetos', img: '', link: '' },
    { name: 'Sobre', img: '', link: '' },
    { name: 'Tecnologias', img: '', link: '' },
    { name: 'Contate-nos', img: '', link: '' }
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerArea}>
                <div className={styles.footerTitle}>
                    <img src="/images/pino-de-localizacao.png" alt="" />
                    <div className={styles.title}>LOCALIZAÇÃO</div>
                    <div className={styles.loc}>
                        Rio de Janeiro<br />
                        RJ<br />
                        Brasil
                    </div>
                </div>
                <div className={styles.footerTitle}>
                    <img src="/images/e-mail.png" alt="" />
                    <div className={styles.title}>MANDE UM E-MAIL</div>
                    <div className={styles.loc}>daniel.santos3210@outlook.com</div>
                </div>
                <div className={styles.footerTitle}>
                    <img src="/images/whatsapp.png" alt="" />
                    <div className={styles.title}>CHAMADA OU WHATSAPP</div>
                    <div className={styles.loc}>(+55) 21 96970-3202</div>
                </div>
            </div>
            <div className={styles.direitos}>
                © Todos os Direitos Reservados - Daniel Santos Correa
            </div>
        </div>
    )
}

export default Footer;