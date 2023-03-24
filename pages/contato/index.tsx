import styles from './style.module.css';

const Contato = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputArea}>
                <h2>Contate-me</h2>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Assunto' />
                <textarea name="" id="" placeholder='Comente aqui'></textarea>
            </div>
        </div>
    )
}

export default Contato;