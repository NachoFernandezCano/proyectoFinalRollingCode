import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";
import TableBody from "./tableBody/tableBody";
import "./table.css";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState({});
  const [deleteProduct, setDeleteProduct] = useState({});

  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDModalShow] = useState(false);

  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id: generateId() };
    for (const target of e.target) {
      if (target.type !== "submit") {
        product[target.name] = target.value;
        target.value = "";
      };
    };
    setProducts([...products, product]);
    setCreateModalShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newProduct = { id: productToEdit.id };
    for (const target of e.target) {
      if (target.type !== "submit") {
        newProduct[target.name] = target.value;
        target.value = "";
      }
    }
    const newProducts = products.map((product) => {
      if (product.id === newProduct.id) return newProduct;
      return product;
    });
    setProducts(newProducts);
    setEditModalShow(false);
  };
  const handleDelete = (product) => {
    setDeleteProduct(product);
    setDModalShow(true);
  };

  const confirmDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== deleteProduct.id);
    setProducts(filteredProducts);
    setDModalShow(false);
  }

  const editTrigger = (editingProduct) => {
    setProductToEdit(editingProduct);
    setEditModalShow(true);
  };

  const changeInputValue = (e) => {
    setProductToEdit({ ...productToEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="homeContainer">
      <div className="tableContainer">
        <TableBody
          data={products}
          deleteModalShow={deleteModalShow}
          setDModalShow={setDModalShow}
          handleDelete={handleDelete}
          editTrigger={editTrigger}
        />
      </div>

      <Button
        id="createBtn"
        variant="success"
        onClick={() => setCreateModalShow(true)}
        className="d-flex justify-content-center align-items-center"
      >
        Crear producto
      </Button>

      <CreateModal
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
        handleSubmit={handleSubmit}
      />
      <EditModal
        editModalShow={editModalShow}
        setEditModalShow={setEditModalShow}
        handleSubmit={handleEdit}
        isEditingForm={true}
        userToEdit={productToEdit}
        changeInputValue={changeInputValue}
      />
      <DeleteModal
        deleteModalShow={deleteModalShow}
        setDModalShow={setDModalShow}
        handleDelete={handleDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};
export default Table;
