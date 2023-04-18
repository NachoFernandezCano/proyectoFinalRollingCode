import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homePage/homePage";
import RecoverPassword from "./components/form/account/RecoverPassword";
import EditPassUser from "./components/form/account/editpassword/EditPassUser";
import Perfil from "./components/admin/perfil/Perfiluser";
import ProductPage from "./components/productPage/ProductPage";
import Table from "./components/table/Table";
import HotItems from "./pages/hotItemsPage/hotItemsPage";
import Error404 from "./components/error/Error404";
import CartPage from "./components/cartPage/CartPage";
import ProductPageSell from "./components/productPageSell/ProductPageSell";
import { CartProvider } from "./context/cartContext";
import { useState } from "react";

function App() {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header productQuantity={productQuantity} />
          <Routes>
            <Route
              path="/"
              element={<Homepage setProductQuantity={setProductQuantity} />}
            />
            <Route path="/ProductPage/:id" element={<ProductPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/RecoverPassword" element={<RecoverPassword />} />
            <Route path="/EditPassword" element={<EditPassUser />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/HotItems" element={<HotItems />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path="/Comprar" element={<CartPage />} />
            <Route path="/ComprarProductPage" element={<ProductPageSell />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
