import React from "react";
import './editingForm.css';
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const EditingForm = (props) => {
  const {
    isEditingForm,
    userToEdit,
    userToEditId
  } = props;

  const [formData, setFormData] = useState({
    type: userToEdit?.type || '',
    direccion: {
      calle: userToEdit?.direccion?.calle || '',
      nro: userToEdit?.direccion?.nro || '',
      dpto: userToEdit?.direccion?.dpto || '',
      provincia: userToEdit?.direccion?.provincia || '',
      localidad: userToEdit?.direccion?.localidad || '',
      codigopostal: userToEdit?.direccion?.codigopostal || '',
    },
    nombre: userToEdit?.nombre || '',
    apellido: userToEdit?.apellido || '',
    email: userToEdit?.email || '',
    repPassword: userToEdit?.stock || '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("direccion.")) {
      setFormData({
        ...formData,
        direccion: {
          ...formData.direccion,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleDirectionChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        direccion: {
          ...prevState.direccion,
          [name]: value,
        },
      };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userToEditId
    try {
      if (formData.password !== formData.repPassword) {
        return Swal.fire({
          title: "<strong>Error</strong>",
          html: "<i>Las contraseñas no coinciden</i>",
          icon: "error",
        });
      }
      if (isEditingForm) {
        await axios.put(`/api/user/editUser/${id}`, formData);
        return Swal.fire({
          title: "<strong>Felicidades</strong>",
          html: "<i>Usuario editado correctamente</i>",
          icon: "success",
        });
      } else {
        await axios.post("/api/user/register", formData);
      }
      return Swal.fire({
        title: "<strong>Felicidades</strong>",
        html: "<i>Usario creado correctamente</i>",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <b>Tipo:</b>
          <input
            minLength={3}
            maxLength={30}
            className="inputArea"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Nombre:</b>
          <input
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Apellido:</b>
          <input
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Calle:</b>
          <input
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="calle"
            defaultValue={formData.direccion.calle}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Número:</b>
          <input
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="nro"
            defaultValue={formData.direccion.nro}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Departamento:</b>
          <input
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="dpto"
            defaultValue={formData.direccion.dpto}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Provincia:</b>
          <input
            minLength={3}
            maxLength={30}
            className="inputArea"
            name="provincia"
            defaultValue={formData.direccion.provincia}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Localidad:</b>
          <input
            className="inputArea"
            name="localidad"
            defaultValue={formData.direccion.localidad}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Código Postal:</b>
          <input
            minLength={3}
            maxLength={30}
            className="inputArea"
            name="codigopostal"
            defaultValue={formData.direccion.codigopostal}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Email:</b>
          <input
            className="inputArea"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {isEditingForm ? (
          <></>
        ) : (
          <>
            <div>
              <b>Contraseña:</b>
              <input
                type="password"
                minLength={3}
                maxLength={30}
                className="inputArea"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <b>Repetir Contraseña:</b>
              <input
                type="password"
                minLength={3}
                maxLength={30}
                className="inputArea"
                name="repPassword"
                value={formData.repPassword}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div>
          <button id="modalsButtons" type="submit">
            {isEditingForm ? 'Editar usario' : 'Crear usuario'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditingForm;
