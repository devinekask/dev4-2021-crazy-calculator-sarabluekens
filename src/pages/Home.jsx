import React from 'react';
import styles from "./Home.module.css";

const Home = () => {
    return ( 
        <section className={styles.home}>
            <h1 className={styles.homeTitle}>To The GRAAAAAAVE</h1>
            <p className={styles.homeText}>Welcome to the crazy calculator for Death</p>
        </section>
     );
}
 
export default Home;