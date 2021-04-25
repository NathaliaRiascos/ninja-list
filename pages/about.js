import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>      
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas"></meta>
            </Head>
            <h1>About</h1>
            <div className={styles.title}>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </>
    );
}
 
export default About;