import React from "react";
import './editingForm.css';
import axios from 'config/axiosInit';
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
    const id = userToEditId;
    try {
      if (isEditingForm) {
        await axios.put(`/api/user/editUser/${id}`, formData);
        return Swal.fire({
          title: '<strong>Felicidades</strong>',
          html: '<i>Usuario editado correctamente</i>',
          icon: 'success',
        });
      } else {
        if (!isEditingForm && formData.password !== formData.repPassword) {
          Swal.fire({
            title: '<strong>Error</strong>',
            html: '<i>Las contraseñas no coinciden</i>',
            icon: 'error',
          });
          return;
        }
        const response = await axios.post('/api/user/register', formData);
          if (response) {
            return Swal.fire({
              title: '<strong>Felicidades</strong>',
              html: '<i>Usuario creado correctamente</i>',
              icon: 'success',
            });
          }
        }
    } catch (error) {
      console.error(error);
      if (error.response.data.message === 'El email ingresado ya se encuentra en uso'){
        Swal.fire({
          title: '<strong>Error</strong>',
          html: '<i>El correo electrónico ya está en uso</i>',
          icon: 'error',
        });
        return;
    }
    else if (error.response.data.message === "Por favor complete todos los campos") {
      Swal.fire({
        title: '<strong>Error</strong>',
        html: '<i>Por favor completar todos los campos</i>',
        icon: 'error',
      });
      return;
    }}
  };
  
  
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <b>Tipo:</b>
          <input
            type="text"
            minLength={3}
            maxLength={30}
            className="inputArea"
            name="type"
            defaultValue={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Nombre:</b>
          <input
            placeholder="Requerido"
            type="text"
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="nombre"
            defaultValue={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Apellido:</b>
          <input
            placeholder="Requerido"
            type="text"
            className="inputArea"
            minLength={3}
            maxLength={30}
            name="apellido"
            defaultValue={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Calle:</b>
          <input
            type="text"
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
            type="number"
            className="inputArea"
            minLength={1}
            maxLength={5}
            name="nro"
            defaultValue={formData.direccion.nro}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Departamento:</b>
          <input
            type="text"
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
            type="text"
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
            type="text"
            className="inputArea"
            name="localidad"
            defaultValue={formData.direccion.localidad}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Código Postal:</b>
          <input
            type="number"
            minLength={1}
            maxLength={5}
            className="inputArea"
            name="codigopostal"
            defaultValue={formData.direccion.codigopostal}
            onBlur={handleDirectionChange}
          />
        </div>
        <div>
          <b>Email:</b>
          <input
            placeholder="Requerido"
            type="email"
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
                placeholder="Requerido"
                type="password"
                minLength={3}
                maxLength={30}
                className="inputArea"
                name="password"
                defaultValue={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <b>Repetir Contraseña:</b>
              <input
                placeholder="Requerido"
                type="password"
                minLength={3}
                maxLength={30}
                className="inputArea"
                name="repPassword"
                defaultValue={formData.repPassword}
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
