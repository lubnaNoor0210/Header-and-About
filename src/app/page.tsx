import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Welcome to my Next.js app" />
            </Head>
            <Header />
            <main>
                <h2>Welcome to My Next.js App</h2>
                <p>This is the homepage.</p>
            </main>
        </div>
    );
};

export default Home;