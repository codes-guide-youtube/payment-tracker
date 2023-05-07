import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return <div className="min-h-screen flex flex-col container "> 
  <Header />
  <Component {...pageProps}  />
    <Footer/>
  </div>
}
