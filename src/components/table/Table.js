import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";
import TableBody from "./tableBody/tableBody";
import "./table.css";
import axios from "axios";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState({});
  const [productToEditId, setProductToEditId] = useState({});
  const [deleteProduct, setDeleteProduct] = useState({});

  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDModalShow] = useState(false);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    getProduct();
  }, [page]);  // eslint-disable-line

  const getProduct = async () => {
    try {
      const info = await axios.get('http://localhost:4000/api/products/products', { params: { page } });
      setPagesCount(info.data.totalPages);
      setProducts(info.data)
    } catch (error) {
      if (error?.response?.data?.error === 'No se encontraron productos') {
        setProducts([]);
      } else {
        alert('Algo salio mal intente mas tarde');
      }
    }
  };

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
    for (const target of e.target) {
      if (target.type !== "submit") {
        setProductToEdit({
          ...productToEdit,
          [target.name]: target.value
        });
        target.value = "";
      }
    }
    const newProducts = products.map((product) => {
      if (product._id === productToEdit._id) {
        return productToEdit;
      } else {
        return product;
      }
    });
    setProducts(newProducts);
    setEditModalShow(false);
  };

  const handleDelete = (product) => {
    setDeleteProduct(product._id);
    setDModalShow(true);
  };

  const confirmDelete = (deleteProduct) => {
    const id = deleteProduct
    axios.delete(`http://localhost:4000/api/products/deleteProduct/${id}`)
      .then((response) => {
        const filteredProducts = products.filter((product) => product._id !== deleteProduct);
        setProducts(filteredProducts);
        setDModalShow(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editTrigger = (product) => {
    setProductToEdit(product);
    setProductToEditId(product._id);
    setEditModalShow(true);
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
      <div className="createBtnContainer d-flex justify-content-end align-items-center">
        <Button
          id="createBtn"
          variant="success"
          onClick={() => setCreateModalShow(true)}
        >
          Crear producto
        </Button>
      </div>
      <div className="tablePagination">
        <div className="tablePaginationBtn">
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            {'<'}
          </Button>
          <b>Página {page}</b>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === pagesCount}
          >
            {'>'}
          </Button>
        </div>
      </div>

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
        productToEdit={productToEdit}
        productToEditId={productToEditId}
      />
      <DeleteModal
        deleteModalShow={deleteModalShow}
        setDModalShow={setDModalShow}
        handleDelete={handleDelete}
        confirmDelete={confirmDelete}
        deleteProductId={deleteProduct}
      />
    </div>
  );
};
export default Table;
