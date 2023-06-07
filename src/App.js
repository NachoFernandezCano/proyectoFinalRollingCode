import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homePage/homePage";
import RecoverPassword from "./components/form/account/RecoverPassword";
import EditPassUser from "./components/form/account/editpassword/EditPassUser";
import ProductPage from "./components/productPage/ProductPage";
import Table from "./components/table/Table";
import UserTable from "./components/admin/table/UsersTable";
import HotItems from "./pages/hotItemsPage/hotItemsPage";
import Error404 from "./components/error/Error404";
import CartPage from "./components/cartPage/CartPage";
import ProductPageSell from "./components/productPageSell/ProductPageSell";
import SellPage from "./components/sellPage/SellPage"
import { CartProvider } from "./context/cartContext";
import { useState } from "react";
import Perfiluser from "./components/admin/perfil/Perfiluser";

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
            <Route path="/ProductPage/:id" element={<ProductPage setProductQuantity={setProductQuantity} />} />
            <Route path="/CartPage" element={<CartPage setProductQuantity={setProductQuantity} />} />
            <Route path="/RecoverPassword" element={<RecoverPassword />} />
            <Route path="/EditPassword" element={<EditPassUser />} />
            <Route path="/Perfil" element={<Perfiluser />} />
            <Route path="/ProductsTable" element={<Table />} />
            <Route path="/UsersTable" element={<UserTable />} />
            <Route path="/HotItems" element={<HotItems />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path="/Comprar" element={<CartPage />} />
            <Route path="/FinalizarCompra" element={<SellPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
