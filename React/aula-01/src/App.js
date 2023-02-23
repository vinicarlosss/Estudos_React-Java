import './App.css'
import {
  Header,
  Footer,
  Banner,
  Projects,
  Contact
} from './components'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
