import Header from "./layout/header/Header"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./layout/home/Home";
import RecoverPassword from './components/Form/account/RecoverPassword';
import EditPassUser from './components/Form/account/editpassword/EditPassUser';
import Administrator from './layout/admin/Administrator';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>            
      <Header/>
      <Routes>        
      <Route path='/' element={<Home />}/>
        <Route path='/RecoverPassword' element={<RecoverPassword />}/>
        <Route path='/EditPassword' element={< EditPassUser/>}/>       
        <Route path='/Admin' element={<Administrator />}/>
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;

