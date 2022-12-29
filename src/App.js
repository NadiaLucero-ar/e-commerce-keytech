import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Inicio from './pages/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './pages/Productos';


function App() {
  return (
    <div className='contenedorTotalDeLaPagina'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
