import styles from './style.module.css';

const navList = [
    { name: 'Home', img: '', link: '/' },
    { name: 'Projetos', img: '', link: '' },
    { name: 'Sobre', img: '', link: '' },
    { name: 'Tecnologias', img: '', link: '' },
    { name: 'Contate-nos', img: '', link: '' }
]
const socialList = [
    { name: 'Linkedin', img: '/images/linkedin2.png' },
    { name: 'Github', img: '/images/github.png' },
]

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>LOGO</div>
            <ul>
                {navList.map((item, index) => (
                    <li key={index}><a href={item.link}>{item.name}</a></li>
                ))}
            </ul>
            <div className={styles.verticalLine}></div>
            <div className={styles.socialArea}>
                {socialList.map((item, index) => (
                    <img src={item.img} alt={item.name} key={index}/>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;