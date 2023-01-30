import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/homePage/homePage';
import RecoverPassword from './components/Form/account/RecoverPassword';
import EditPassUser from './components/Form/account/editpassword/EditPassUser';
import Perfil from './layout/admin/perfil/Perfiluser';
import './App.css';
import ProductPage from "./layout/productPage/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>            
        <Header/>
        <Routes>        
          <Route path='/' element={<Home />}/>
          <Route path='/ProductPage' element={<ProductPage />}/>
          <Route path='/RecoverPassword' element={<RecoverPassword />}/>
          <Route path='/EditPassword' element={< EditPassUser/>}/>       
          <Route path='/Perfil' element={<Perfil />}/>
        </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
