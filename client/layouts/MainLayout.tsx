import Head from 'next/head';
import { Container } from '../components/sharedstyles';
import MainMenu from '../components/common/MainMenu';

export default function MainLayout({ children }) {
    return (
        <Container>
            <Head>
                <title>Recruitment</title>
                <meta name="description" content="Recruitment automatization" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MainMenu>{children}</MainMenu>
            </main>
        </Container>
    );
}
