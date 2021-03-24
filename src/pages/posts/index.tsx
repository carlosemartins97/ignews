import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
    return (
        <>
            <Head>
                <title> Posts | ig.news </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time> 12 de março de 2021</time>
                        <strong>Creating mono repo with Learn trabson</strong>
                        <p>In this guide, you will learn how to create a Mono repo using trabson tecnologie</p>
                    </a>

                    <a href="#">
                        <time> 12 de março de 2021</time>
                        <strong>Creating mono repo with Learn trabson</strong>
                        <p>In this guide, you will learn how to create a Mono repo using trabson tecnologie</p>
                    </a>

                    <a href="#">
                        <time> 12 de março de 2021</time>
                        <strong>Creating mono repo with Learn trabson</strong>
                        <p>In this guide, you will learn how to create a Mono repo using trabson tecnologie</p>
                    </a>
                </div>
            </main>
        </>
    );
}