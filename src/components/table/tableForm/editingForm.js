import React from "react";
import { Button } from "react-bootstrap";
import './editingForm.css';

const EditingForm = (props) => {
  const {
    handleSubmit,
    isEditingForm,
    userToEdit: productToEdit,
    changeInputValue,
  } = props;
<<<<<<< Updated upstream
=======

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
    const id = productToEditId
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
      }
      return Swal.fire({
        title: "<strong>Felicidades</strong>",
        html: "<i>Producto creado correctamente</i>",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };


>>>>>>> Stashed changes
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <b>Categoría:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="category"
                value={productToEdit?.category || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="category" />)
          }
        </div>
        <div>
          <b>Insertar imagen:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="image"
                value={productToEdit?.image || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="image" />)
          }
        </div>
        <div>
          <b>Nombre del producto:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="name"
                value={productToEdit?.name || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="name" />)
          }
        </div>
        <div>
          <b>Marca:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="brand"
                value={productToEdit?.brand || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="brand" />)
          }
        </div>
        <div>
          <b>Descripción:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="description"
                value={productToEdit?.description || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="description" />)
          }
        </div>
        <div>
          <b>Precio:</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="price"
                value={productToEdit?.price || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="price" />)
          }
        </div>
        <div>
          <b>Stock</b>
          {
            isEditingForm ? (
              <input
                className="inputArea"
                name="stock"
                value={productToEdit?.stock || ''}
                onChange={(e) => changeInputValue(e)}
              />
            ) : (<input className="inputArea" name="stock" />)
          }
        </div>
        <div>
          <Button id="modalsButtons" type="submit"> {
            isEditingForm ? 'Editar producto' : 'Crear'
          }
          </Button>
        </div>
      </form >
    </div>
  );
};

export default EditingForm;
