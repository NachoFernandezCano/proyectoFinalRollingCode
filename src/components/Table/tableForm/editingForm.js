import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './editingForm.css';

const EditingForm = (props) => {
  const {
    handleSubmit,
    isEditingForm,
    userToEdit: productToEdit,
    changeInputValue,
  } = props;
  return (    
    <div className="formContainer ">      
      <Row>
        <Col xs lg='4'>
            <div>
                <img src={productToEdit.image.img1} alt={productToEdit.category} id="output"/>
            </div>
        </Col>
        <Col xs lg='8'>
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
                <textarea
                  style={{ height: '120px' }}
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
            </Col>
      </Row>
    </div>
  );
};

export default EditingForm;
