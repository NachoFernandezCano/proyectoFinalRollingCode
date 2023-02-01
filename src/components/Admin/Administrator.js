import React from 'react'
import { Card, Container, Tab, Tabs } from 'react-bootstrap'
import Usuarios from './user/Usuarios';

const Administrator = () => {
    return (
        <>
            <Container className=" d-flex flex-column mt-5">
                <Card>
                    <Card.Header>Administracion Sistemas</Card.Header>
                    <Card.Body>
                        <Tabs
                            defaultActiveKey="Usuarios"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="Usuarios" title="Usuarios">
                                <Usuarios />
                            </Tab>
                            <Tab eventKey="Articulos" title="Articulos">

                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Administrator;