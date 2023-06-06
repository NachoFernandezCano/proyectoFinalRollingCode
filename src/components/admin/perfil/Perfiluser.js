import { FaIdCardAlt, FaSave, FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "config/axiosInit";
import React, { useEffect, useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./perfil.css";
import Loader from "../../util/loader/Loader";

const Perfiluser = () => {
  const [perfilData, setPerfilData] = useState({});
  const [loader, setLoader] = useState(false);

  let navitage = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    handleGetUserData(token);
  }, []);

  const handleGetUserData = async (token) => {
    setLoader(true);
    try {
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: token },
      });
      setPerfilData(data.user);
      setLoader(false);
    } catch (error) {
      if (error.response.data.tipoerror === "tokenexp") {
      }
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfilData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGrabar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("user");
    try {
      const paylaod = {};
      for (const target of e.target) {
        if (target.type !== "submit") {
          paylaod[target.name] = target.value;
        }
      }
      const { data } = await axios.patch("/api/user/update", paylaod, {
        headers: { Authorization: token },
      });
      Swal.fire({
        title: "<strong>Leer Atte.</strong>",
        html: "<i>" + data.message + "</i>",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "<strong>Error Leer Atte.</strong>",
        html: "<i>" + error.response.data.message + "</i>",
        icon: "error",
      });
    }
  };
  const handleVolver = () => {
    navitage("/");
  };

  return (
    <>
      <div className="upContainer container-fluid col-8 mt-4 mb-4">
        {loader ? (
          <Loader />
        ) : (
          <Card>
            <Card.Header className="perfilCardH">
              <div className="container-titulo">
                <FaIdCardAlt className="tituloimg" />
                <h3 className="titulo">Perfil de Usuario</h3>
              </div>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleGrabar}>
                <Row className="perfilForm">
                  <Form.Group as={Col} controlId="formGridNombre">
                    <Form.Label className="pe-2">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      defaultValue={perfilData?.nombre}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridApellido">
                    <Form.Label className="pe-2">Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Apellido"
                      name="apellido"
                      defaultValue={perfilData?.apellido}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="pe-2">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      defaultValue={perfilData?.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: San Martin"
                    name="calle"
                    defaultValue={perfilData?.direccion?.calle}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row className="perfilForm">
                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label className="pe-2">Nro.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej: 320"
                      name="nro"
                      defaultValue={perfilData?.direccion?.nro}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label className="pe-2">Dpto.</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: 10"
                      name="dpto"
                      defaultValue={perfilData?.direccion?.dpto}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>
                <Row className="perfilForm mt-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="pe-2">Provincia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Tucumán"
                      name="provincia"
                      defaultValue={perfilData?.direccion?.provincia}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="pe-2">Localidad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Capital"
                      name="localidad"
                      defaultValue={perfilData?.direccion?.localidad}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="pe-2">C.P.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej: 4000"
                      name="codigopostal"
                      defaultValue={perfilData?.direccion?.codigopostal}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-between mt-3">
                  <Button onClick={handleVolver} className="btnPerfil">
                    <FaArrowAltCircleLeft /> Volver
                  </Button>
                  <Button type="submit" className="btnPerfil">
                    <FaSave /> Guardar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};
export default Perfiluser;