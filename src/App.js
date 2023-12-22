import './App.css';
import { Head } from './Head';
import Slider from './Slider';
import { Main } from './Main';
import Footer from './Footer';
import { Route, Routes } from "react-router-dom";
import Contact from './Contact';

function App() {
  return <>
    <Head />
    <Slider />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer />
  </>
}

export default App;
