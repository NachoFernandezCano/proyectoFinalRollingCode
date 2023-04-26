import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import './tableBody.css';

const TableBody = (props) => {
  const {
    data,
    handleDelete,
    editTrigger,
  } = props;

  const [dataForTable, setDataForTable] = useState([]);

  useEffect(() => {
    setDataForTable(data);
  }, [data])

  return (
    <Table responsive id="mainTable">
      <thead>
        <tr>
          <th className="align-middle">CATEGORÍA</th>
          <th className="align-middle">NOMBRE</th>
          <th className="align-middle">MARCA</th>
          <th className="align-middle">DESCRIPCIÓN</th>
          <th className="align-middle">PRECIO</th>
          <th className="align-middle">STOCK</th>
          <th className="align-middle">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForTable?.map((product) => (
            <tr key={product._id}>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.category}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.name}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.brand}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.description}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.price}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {product.stock}
                </div>
              </td>
              <td className="d-flex flex-row align-items-center justify-content-center border-0">
                <Button id="deleteBtn" onClick={() => handleDelete(product)}>
                  Borrar
                </Button>
                <Button id="editBtn" onClick={() => editTrigger(product)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default TableBody;
