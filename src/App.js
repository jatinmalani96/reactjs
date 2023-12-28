import './App.css';
import Head from './components/Head';
import Slider from './components/Slider';
import { Main } from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import DemouseState from './components/DemouseState';
import Todo from './components/Todo';

function App() {
  return <>
    <Head />
    {/* <DemouseState/> */}
    <Todo />
    {/* <Slider /> */}
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/demo' element={<DemouseState />}></Route>
      {/* <Route path='/todo' element={<Todo />}></Route> */}
    </Routes>
    <Footer />
  </>
}

export default App;
