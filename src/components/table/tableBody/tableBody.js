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
          <th>CATEGORÍA</th>          
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
            <tr key={product._id}>
              <td>{product.category}</td>              
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
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
