import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import './tableBody.css';
import axios from "axios";

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
          <th>TIPO</th>          
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>MAIL</th>
          <th>CALLE</th>
          <th>NÚMERO</th>
          <th>DEPARTAMENTO</th>
          <th>PROVINCIA</th>
          <th>LOCALIDAD</th>
          <th>CÓDIGO POSTAL</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForTable?.map((user) => (
            <tr key={user.id}>
              <td>{user.type}</td>              
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>
                {user.direccion.calle}
              </td>
              <td>
                {user.direccion.nro}
              </td>
              <td>
                {user.direccion.dpto}
              </td>
              <td>
                {user.direccion.provincia} 
              </td>
              <td>
                {user.direccion.localidad} 
              </td>
              <th>
                {user.direccion.codigopostal}
              </th>
              <td className="d-flex flex-row align-items-center justify-content-center border-0">
                <Button id="deleteBtn" onClick={() => handleDelete(user)}>
                  Borrar
                </Button>
                <Button id="editBtn" onClick={() => editTrigger(user)}>
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
