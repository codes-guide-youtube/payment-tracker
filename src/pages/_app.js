import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return <div className="min-h-screen mx-auto container"> 
  <Header />
  <Component {...pageProps} />
    <Footer className="bottom-0" />
  </div>
}
