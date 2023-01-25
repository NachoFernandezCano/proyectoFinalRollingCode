import React, { useEffect, useState } from "react";
import BootstrapTable from 'react-bootstrap/Table';
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
    <BootstrapTable id="mainTable">
      <thead>
        <tr>
          <th>CATEGORÍA</th>
          <th>IMAGEN</th>
          <th>NOMBRE</th>
          <th>MARCA</th>
          <th>DESCRIPCIÓN</th>
          <th>PRECIO</th>
          <th>STOCK</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForTable?.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.image}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td className="d-flex justify-content-evenly align-items-center">
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
    </BootstrapTable>
  );
};

export default TableBody;
