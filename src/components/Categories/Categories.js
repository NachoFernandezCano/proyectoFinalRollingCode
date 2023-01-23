import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

function Categories() {
  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item>
          <Button>Notebooks</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Celulares</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Monitores</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Auriculares</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Smartwatch</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Otros</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Categories;