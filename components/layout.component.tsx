import Head from 'next/head'
import { Header } from './';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
`
const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`

const Layout: React.FC = (props) => (
    <AppContainer>
        <Head>
            <title>PostsAPI</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <StyledMain>
            {props.children}
        </StyledMain>
    </AppContainer>
);

export default Layout;