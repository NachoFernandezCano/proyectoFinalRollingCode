import React from "react";
import './editingForm.css';
import axios from 'config/axiosInit';
import { useState } from "react";
import Swal from "sweetalert2";

const EditingForm = (props) => {
  const {
    isEditingForm,
    productToEdit,
    productToEditId
  } = props;

  const [formData, setFormData] = useState({
    category: productToEdit?.category || '',
    type: productToEdit?.type || '',
    image: {
      img1: productToEdit?.image?.img1 || '',
      img2: productToEdit?.image?.img2 || '',
      img3: productToEdit?.image?.img3 || ''
    },
    name: productToEdit?.name || '',
    brand: productToEdit?.brand || '',
    description: productToEdit?.description || '',
    price: productToEdit?.price || '',
    stock: productToEdit?.stock || '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("image.")) {
      setFormData({
        ...formData,
        image: {
          ...formData.image,
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


  const handleImageChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        image: {
          ...prevState.image,
          [name]: value,
        },
      };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = productToEditId;
    const existingTypes = ["Celulares", "Notebook", "Monitores", "Auriculares", "SmartWatch", "Otros"];
    try {
      if (isEditingForm) {
        await axios.put(`/api/products/editProducts/${id}`, formData);
        return Swal.fire({
          title: "<strong>Felicidades</strong>",
          html: "<i>Producto editado correctamente</i>",
          icon: "success",
        });
      } else {
        await axios.post("/api/products/addProducts", formData);
        return Swal.fire({
          title: "<strong>Felicidades</strong>",
          html: "<i>Producto creado correctamente</i>",
          icon: "success",
        });
      }
    } catch (error) {
      console.error(error);
      if (!existingTypes.includes(formData.type)) {
        const errorMessage = `Tipos existentes: ${existingTypes.join(", ")}`;
        Swal.fire({
          title: "<strong>Error, el tipo no es válido.</strong>",
          html: `<i>${errorMessage}</i>`,
          icon: "error",
        });
      }
      else if (error.response.data.message === "El campo name es requerido" || "El campo type es requerido" || "El campo stock es requerido" || "El campo image es requerido" || "El campo price es requerido" || "El campo brand es requerido" ) {
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
          <b>Categoría:</b>
          <input
            placeholder="Requerido"
            className="inputArea"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Tipo:</b>
          <input
            placeholder="Requerido"
            className="inputArea"
            name="type"
            value={formData.type.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Imagen 1:</b>
          <input
            placeholder="Requerido"
            className="inputArea"
            name="img1"
            defaultValue={formData.image.img1}
            onBlur={handleImageChange}
          />
        </div>
        <div>
          <b>Imagen 2:</b>
          <input
            className="inputArea"
            name="img2"
            defaultValue={formData.image.img2}
            onBlur={handleImageChange}
          />
        </div>
        <div>
          <b>Imagen 3:</b>
          <input
            className="inputArea"
            name="img3"
            defaultValue={formData.image.img3}
            onBlur={handleImageChange}
          />
        </div>
        <div>
          <b>Nombre del producto:</b>
          <input
            type="text"
            placeholder="Requerido"
            className="inputArea"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Marca:</b>
          <input
            type="text"
            placeholder="Requerido"
            className="inputArea"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Descripción:</b>
          <input
            placeholder="Requerido"
            className="inputArea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Precio:</b>
          <input
            type="number"
            placeholder="Requerido"
            className="inputArea"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>Stock</b>
          <input
            type="number"
            placeholder="Requerido"
            className="inputArea"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={() => {console.log(productToEdit)}}></button>
          <button id="modalsButtons" type="submit">
            {isEditingForm ? 'Editar producto' : 'Crear'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditingForm;
