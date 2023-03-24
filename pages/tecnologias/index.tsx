import Head from 'next/head';
import Image from 'next/image';
import tecList from '../../utils/tecnologias';
import styles from './style.module.css';

const Tecnologias = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tecnologias</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>TECNOLOGIAS</h1>
            <div style={{ maxWidth: '400px', margin: '10px' }}>Tecnlogias que mais estou habituado e uma das mais pedidas e necessarias no mercado de programação atualmente.</div>
            <div>
                {tecList.map((item, index) => (
                    <div className={styles.eachTec} key={index}>
                        <div>
                            <Image src={item.img} alt="" />
                        </div>
                        <div className={styles.InfoArea}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.porcemArea}>
                                <div className={styles.porcem}>
                                    <div className={styles.porcemV} style={{ width: `${item.porcem}%` }}></div>
                                </div>
                                <div className={styles.porcemInfo}>{item.porcem}%</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tecnologias;