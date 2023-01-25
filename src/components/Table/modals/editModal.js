import React from 'react'
import { Modal } from 'react-bootstrap'
import Form from '../tableForm/editingForm'
import './modals.css';

const editModal = (props) => {
  const {
    editModalShow,
    setEditModalShow,
    handleSubmit,
    isEditingForm,
    userToEdit,
    changeInputValue,
  } = props;

  return (
    <Modal id="editModal" show={editModalShow} onHide={() => setEditModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          handleSubmit={handleSubmit}
          isEditingForm={isEditingForm}
          userToEdit={userToEdit}
          changeInputValue={changeInputValue}
        />
      </Modal.Body>
    </Modal>
  )
}

export default editModal
