import React from "react";
import { Button, Form } from "react-bootstrap";
import Loader from "../../util/loader/Loader";
import "./registerForm.css";
import { BsFillPersonPlusFill } from "react-icons/bs";

const RegisterForm = ({ setloaderRegister, handleRegister }) => {
  return (
    <>
      <Form onSubmit={handleRegister}>
        <Form.Group controlid="formRegNombre">
          <Form.Label className="labelStyles">
            Nombre<div className="text-muted">Requerido</div>
          </Form.Label>
          <Form.Control
            className="inputStyles"
            size="lg"
            type="text"
            name="nombre"
            placeholder="Nombre"
            minLength={3}
            maxLength={30}
            required
          />
        </Form.Group>
        <Form.Group controlid="formRegApellido">
          <Form.Label className="labelStyles">
            Apellido<div className="text-muted">Requerido</div>
          </Form.Label>
          <Form.Control
            className="inputStyles"
            size="lg"
            type="text"
            name="apellido"
            minLength={3}
            maxLength={30}
            placeholder="Apellido"
            required
          />
        </Form.Group>
        <Form.Group className="registerFormGroup">
          <Form.Label className="labelStyles">Dirección</Form.Label>
          <Form.Control
            controlid="formRegDirCalle"
            name="direccion[calle]"
            type="text"
            className="inputStyles"
            size="lg"
            placeholder="Calle"
            minLength={3}
            maxLength={30}
          />
          <Form.Control
            controlid="formRegDirNro"
            name="direccion[nro]"
            type="number"
            className="inputStyles"
            size="lg"
            placeholder="Número"
            minLength={1}
            maxLength={10}
          />
          <Form.Control
            controlid="formRegDirDpto"
            name="direccion[dpto]"
            type="text"
            className="inputStyles"
            size="lg"
            placeholder="Departamento"
            minLength={1}
            maxLength={5}
          />
          <Form.Control
            controlid="formRegDirProv"
            name="direccion[provincia]"
            type="text"
            className="inputStyles"
            size="lg"
            placeholder="Provincia"
            minLength={3}
            maxLength={20}
          />
          <Form.Control
            controlid="formRegDirLocal"
            name="direccion[localidad]"
            type="text"
            className="inputStyles"
            size="lg"
            placeholder="Localidad"
            minLength={3}
            maxLength={20}
          />
          <Form.Control
            controlid="formRegDirCP"
            name="direccion[codigopostal]"
            type="number"
            className="inputStyles"
            size="lg"
            placeholder="Código postal"
            minLength={1}
            maxLength={8}
          />
          <Form.Label />
        </Form.Group>
        <Form.Group controlid="formBasicEmail">
          <Form.Label className="labelStyles">
            Correo Electronico<div className="text-muted">Requerido</div>
          </Form.Label>
          <Form.Control
            className="inputStyles"
            size="lg"
            type="email"
            name="email"
            minLength={3}
            maxLength={35}
            placeholder="Ingresar correo electrónico"
            required
          />
        </Form.Group>
        <Form.Group controlid="formBasicPassword">
          <Form.Label className="labelStyles">
            Contraseña<div className="text-muted">Requerido</div>
          </Form.Label>
          <Form.Control
            className="inputStyles"
            size="lg"
            type="password"
            name="password"
            minLength={8}
            maxLength={30}
            placeholder="Contraseña"
            required
          />
        </Form.Group>
        <Form.Group controlid="formBasicRepetirPassword">
          <Form.Label className="labelStyles">
            Repetir Contraseña<div className="text-muted">Requerido</div>
          </Form.Label>
          <Form.Control
            className="inputStyles"
            size="lg"
            type="password"
            name="repPassword"
            minLength={3}
            maxLength={30}
            placeholder="Repetir Contraseña"
            required
          />
        </Form.Group>
        {setloaderRegister ? <Loader /> : <div></div>}
        <Form.Group
          className="mb-3 d-flex justify-content-around"
          controlid="formBasicButton"
        >
          <Button type="submit" id="btnRegister">
            <BsFillPersonPlusFill className="btnLogo" /> Registrarse
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default RegisterForm;
