import React, { useState, useEffect } from 'react';
import { Card, Dropdown, Form, FormCheck, InputGroup, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaCcVisa, FaShieldAlt, FaShippingFast } from "react-icons/fa";
import "./productPage.css";
import testProductPage from "../../Assets/images/products/appleWatchNike.jpg";
import testProductPageMiniatura from "../../Assets/images/products/appleWatchNike.jpg";
import testProductPage2Miniatura from "../../Assets/images/products/appleWatchNike1.jpg";
import testProductPage3Miniatura from "../../Assets/images/products/appleWatchNike2.jpg";
import Cards from '../Cards/Cards';
import Amex from '../../Assets/images/mediosDePago/Amex.svg'
import MasterCard from '../../Assets/images/mediosDePago/MasterCard.svg'
import Naranja from '../../Assets/images/mediosDePago/Naranja.svg'
import Visa from '../../Assets/images/mediosDePago/visa.svg'

const ProductPage = () =>{
    const [imagenPrincipalProduct, setImagenPrincipalProduct] = useState(testProductPage)
    const [showInput, setShowInput] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = () =>{
        setShowInput(true)
    }

    const imageHandle = (image) =>{
        setImagenPrincipalProduct(image)
    }



        return (
            <div className='productPageContainer' style={{ background: 'white' }}>
                <div className='containerImgProduct'>
                    <div className='containerImagenPrincipal'>
                        <img className='imagenPrincipalProduct' src={imagenPrincipalProduct}></img>
                    </div>
                    <div className='miniaturasProductContainer'>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle(testProductPageMiniatura)} src={testProductPageMiniatura}></img>
                        </div>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle(testProductPage2Miniatura)} src={testProductPage2Miniatura}></img>
                        </div>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle(testProductPage3Miniatura)} src={testProductPage3Miniatura}></img>
                        </div>
                    </div>
                </div>
                <div className='productInfo'>
                    <h5>Apple Watch Nike Series</h5>
                    <div className='precioMediosDePago'>
                        <div className='precioProductPage'>
                            <h2>$176.399</h2>
                        </div>
                        <div>
                            <Button onClick={handleShow} className='btn-verMediosDePago'>Ver los medios de pago</Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Medios de pago aceptados</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='containerMedioDePagos'>
                                        <div>
                                            <img src={Visa}></img>
                                        </div>
                                        <div>
                                            <img src={Amex}></img>
                                        </div>
                                        <div>
                                            <img src={MasterCard}></img>
                                        </div>
                                        <div>
                                            <img src={Naranja}></img>
                                        </div>
                                    </div> 
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className='btn-comprasCarrito'>
                        <div className='containerBtnComprarYa'>
                            <Button className='btn-comprarYa'>
                                Comprar
                            </Button>
                        </div>
                        <div className='containerBtnAgregarAlcarrito'>
                            <Button className='btn-agregarAlCarrito'>
                                Agregar al carrito
                            </Button>
                        </div>
                    </div>
                    <div className='containerMasCaracteristicas'>
                        <Card classname='masCaracteristicasCard'>
                            <Card.Text className='masCaracteristicasText'>
                            Resistente al agua, Sistema Operativo watchOs 8, Wifi, Cálculo de consumo de calorías, Registro de sueño, Alertas de ritmo, Control musical, Sumergible 50 metros, Gps, Bluetooth, Memoria 32Gb, Resolución 324 x 394
                            </Card.Text>
                        </Card>
                </div>
                </div>
                <div className='containerCardProduct'>
                    <Card classname='cardProductPage' style={{ width: '18rem', height: '35rem'}}>
                        <Card.Header>
                            <Card.Subtitle className="mt-1 text-muted Envios_mantenimiento">
                                <FaShippingFast/>
                                Estamos trabajando para poder realizar envios.
                            </Card.Subtitle>
                        </Card.Header>
                        <Card.Body className='Info_card'>
                                <h6 className='Info_Vendedor'>Vendido por Apple</h6>
                                <div className='infoStockCompra'>
                                    <h5>Stock disponible</h5> 
                                    <div className='text-muted'>(110 unidades disponibles)</div>
                                    <div className='selectorDeCantidadCompra'>
                                    <Dropdown>
                                        <Dropdown.Toggle className='btn-seleccionarCantidad' id="dropdown-basic">
                                            Seleccionar cantidad
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                1 unidad
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                                2 unidades
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">
                                                3 unidades
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">
                                                4 unidades
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5">
                                                5 unidades
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-6">
                                                6 unidades
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleInput()}>
                                                Más de 6 
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                        </Card.Body> 
                        <Card.Body className='Botones_card_utiles'>
                            <Button className='btn-verMasVendedor'>Ver más productos del vendedor</Button>
                            <Button className='btn-reembolso'>Solicitá una devolución</Button>
                        </Card.Body>
                        <Card.Body className='infoGarantiaDevoluciones'>
                            <Card.Subtitle className="mt-1 text-muted">
                                <div>
                                    <p><FaShieldAlt/> Recibí el producto que esperabas o te devolvemos tu dinero. </p>
                                    <p>3 meses de garantía de fábrica.</p>
                                </div>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <h6>Productos que podrían interesarte</h6>
                <div className='containerProductosInteresantes'>
                    {/* <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>    */}
                </div>
            </div>    
    );
}

export default ProductPage;

    
