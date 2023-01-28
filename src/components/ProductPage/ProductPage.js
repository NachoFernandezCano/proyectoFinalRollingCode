import React, { useState, useEffect } from 'react';
import { Card, Form, FormCheck } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaShieldAlt, FaShippingFast } from "react-icons/fa";
import "./productPage.css";
import testProductPage from "../../Assets/images/products/appleWatchNike.jpg";
/* import testProductPage2 from ""; */
import testProductPageMiniatura from "../../Assets/images/products/appleWatchNike.jpg";
import testProductPage2Miniatura from "../../Assets/images/products/appleWatchNike1.jpg";
import testProductPage3Miniatura from "../../Assets/images/products/appleWatchNike2.jpg";

const ProductPage = () =>{
    const [open, setOpen] = useState(false);
    const [imagenPrincipalProduct, setImagenPrincipalProduct] = useState(testProductPage)

useEffect(() => {
    imageHandle()
    },)

    const imageHandle = () =>{
    }

        return (
            <div className='productPageContainer' style={{ background: 'white' }}>
                <div className='containerImgProduct'>
                    <div className='containerImagenPrincipal'>
                        <img className='imagenPrincipalProduct' src={imagenPrincipalProduct}></img>
                    </div>
                    <div className='miniaturasProductContainer'>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle} src={testProductPageMiniatura}></img>
                        </div>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle} src={testProductPage2Miniatura}></img>
                        </div>
                        <div className='miniaturaProducto'>
                            <img className='thumbnail' onClick={() => imageHandle} src={testProductPage3Miniatura}></img>
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
                            <a href='' className='verMediosDePago'>Ver los medios de pago</a>
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
                                        <Form.Select>
                                            <option>Seleccionar cantidad</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
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
            </div>    
    );
}

export default ProductPage;