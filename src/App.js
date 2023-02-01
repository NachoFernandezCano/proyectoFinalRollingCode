import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/homePage/homePage';
import RecoverPassword from './components/Form/account/RecoverPassword';
import EditPassUser from './components/Form/account/editpassword/EditPassUser';
import Administrator from './components/Admin/Administrator';
import ProductPage from './components/ProductPage/ProductPage';
import Table from './components/Table/Table'
import HotItems from './pages/hotItemsPage/hotItemsPage';
import Error404 from './components/Error/Error404';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/RecoverPassword' element={<RecoverPassword />} />
          <Route path='/EditPassword' element={<EditPassUser />} />
          <Route path='/Admin' element={<Administrator />} />
          <Route path='/Table' element={<Table />} />
          <Route path='/HotItems' element={<HotItems />} />
          <Route path='/Error404' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
