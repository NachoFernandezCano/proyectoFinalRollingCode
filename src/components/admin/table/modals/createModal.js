import React from 'react'
import { Modal } from 'react-bootstrap'
import EditingForm from '../tableForm/editingForm'
import './modals.css';

const createModal = ({ createModalShow, setCreateModalShow, handleSubmit }) => {
  return (
    <Modal show={createModalShow} onHide={() => setCreateModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Crear usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditingForm handleSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  )
}

export default createModal
