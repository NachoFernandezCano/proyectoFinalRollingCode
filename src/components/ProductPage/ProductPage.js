import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaShieldAlt, FaShippingFast } from "react-icons/fa";
import "./productPage.css"


function ProductPage() {
    const [open, setOpen] = useState(false);
        return (
            <div style={{ background: 'white' }}>
                <div>
                    <Card style={{ width: '18rem', height: '35rem'}}>
                        <Card.Header>
                            <Card.Subtitle className="mt-1 text-muted Envios_mantenimiento">
                                <FaShippingFast/>
                                Estamos trabajando para poder realizar envios.
                            </Card.Subtitle>
                        </Card.Header>
                        <Card.Body className='Info_card'>
                                <div className='Info_Vendedor'></div>
                                <div className='Info_stock_compra'></div>
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
                <div>
                    <Button className='btn-masCaracteristicas' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                        Más caracteristicas
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
            </div>    
    );
}

export default ProductPage;