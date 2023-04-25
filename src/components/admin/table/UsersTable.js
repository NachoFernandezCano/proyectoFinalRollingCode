import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";
import TableBody from "./tableBody/tableBody";
import "./UsersTable.css";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState({});
  const [deleteUser, setDeleteUser] = useState({});

  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDModalShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    getUsers();
  }, [page]);
  
  
  const getUsers = async () => {
    try {
      setIsLoading(true);
      const info = await axios.get('http://localhost:4000/user/all', { params: { page } });
      setPagesCount(info.data.totalPages);
      setUsers(info.data.user)
      console.log(info)
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === 'No se encontraron usuarios') {
        setUsers([]);
      } else {
        alert('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };


  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { id: generateId() };
    for (const target of e.target) {
      if (target.type !== "submit") {
        user[target.name] = target.value;
        target.value = "";
      };
    };
    setUsers([...user, user]);
    setCreateModalShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newProduct = { id: userToEdit.id };
    for (const target of e.target) {
      if (target.type !== "submit") {
        newProduct[target.name] = target.value;
        target.value = "";
      }
    }
    const newUsers = users.map((user) => {
      if (user.id === newUsers.id) return newUsers;
      return newUsers;
    });
    setUsers(newUsers);
    setEditModalShow(false);
  };
  const handleDelete = (user) => {
    setDeleteUser(user._id);
    setDModalShow(true);
  };

  const confirmDelete = (deleteUser) => {
    const id = deleteUser
    axios.delete(`http://localhost:4000/user/deleteUser/${id}`)
      .then((response) => {
        const filteredUsers = users.filter((user) => user._id !== deleteUser);
        setUsers(filteredUsers);
        setDModalShow(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editTrigger = (editingUser) => {
    console.log(editingUser)
    setUserToEdit(editingUser);
    setEditModalShow(true);
  };

  const changeInputValue = (e) => {
    setUserToEdit({ ...userToEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="homeContainer">
      <div className="tableContainer">
        <TableBody
          data={users}
          deleteModalShow={deleteModalShow}
          setDModalShow={setDModalShow}
          handleDelete={handleDelete}
          editTrigger={editTrigger}
        />
      </div>
      <div className="createBtnContainer d-flex justify-content-end align-items-center">
        <Button
          id="createBtn"
          variant="success"
          onClick={() => setCreateModalShow(true)}
        >
          Crear usuario
        </Button>
      </div>
      <div className="tablePagination">
        <div className="tablePaginationBtn">
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            {'<'}
          </Button>
          <b>Página {page}</b>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === pagesCount}
          >
            {'>'}
          </Button>
        </div>
      </div>

      <CreateModal
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
        handleSubmit={handleSubmit}
      />
      <EditModal
        editModalShow={editModalShow}
        setEditModalShow={setEditModalShow}
        handleSubmit={handleEdit}
        isEditingForm={true}
        userToEdit={userToEdit}
        userToEditId={userToEdit._id}
        changeInputValue={changeInputValue}
      />
      <DeleteModal
        deleteModalShow={deleteModalShow}
        setDModalShow={setDModalShow}
        handleDelete={handleDelete}
        confirmDelete={confirmDelete}
        deleteUserId={deleteUser}
      />
    </div>
  );
};
export default UsersTable;