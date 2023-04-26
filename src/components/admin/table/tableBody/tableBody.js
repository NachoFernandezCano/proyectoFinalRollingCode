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
  }, [data]) // eslint-disable-line

  return (
    <Table responsive id="mainTable">
      <thead>
        <tr>
          <th className="align-middle">TIPO</th>
          <th className="align-middle">NOMBRE</th>
          <th className="align-middle">APELLIDO</th>
          <th className="align-middle">MAIL</th>
          <th className="align-middle">CALLE</th>
          <th className="align-middle">NÚMERO</th>
          <th className="align-middle">PROVINCIA</th>
          <th className="align-middle">LOCALIDAD</th>
          <th className="align-middle">CÓDIGO POSTAL</th>
          <th className="align-middle">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForTable?.map((user) => (
            <tr key={user.id}>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">
                  {user.type}
                </div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.nombre}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.apellido}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.email}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.direccion.calle}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.direccion.nro}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.direccion.provincia}</div>
              </td>
              <td className="align-middle">
                <div className="w-100 d-flex justify-content-center">{user.direccion.localidad}</div>
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
