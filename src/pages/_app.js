import {Navbar} from '@/components';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className='home'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}
