import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Home-page/Home-page";
import RecoverPassword from './Components/Form/account/RecoverPassword';
import EditPassUser from './Components/Form/account/editpassword/EditPassUser';
import Administrator from './Components/Admin/Administrator';
import ProductPage from "./Components/ProductPage/ProductPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
