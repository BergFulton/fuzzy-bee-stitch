import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Main/About'
export default function Layout (){
    return (  
    <>
        <Header/>
  <main>
    {/* <div>JUST RENDER</div> */}
    <About/>
  </main>
  <Footer/>
    </>
)
}