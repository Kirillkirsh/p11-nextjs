
import { Header } from '../components/Header';
import'../global.css';

export default function MyApp({ Component, pageProps}){
    return <>
    <Header />
    <main>
    <Component {...pageProps} />
    </main>
    <hr/>
    
    </>
}