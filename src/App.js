import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage/homePage';
import RecoverPassword from './components/Form/account/RecoverPassword';
import EditPassUser from './components/Form/account/editpassword/EditPassUser';
import Administrator from './components/Admin/Administrator';
import ProductPage from './components/ProductPage/ProductPage';
import Table from './components/Table/Table'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/RecoverPassword' element={<RecoverPassword />} />
          <Route path='/EditPassword' element={< EditPassUser />} />
          <Route path='/Admin' element={<Administrator />} />
          <Route path='/Table' element={<Table />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
