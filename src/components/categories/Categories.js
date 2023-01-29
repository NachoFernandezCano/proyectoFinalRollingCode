import { Button, ButtonGroup } from 'react-bootstrap';
import { FaHeadset } from 'react-icons/fa'
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi'
import { GiSmartphone } from 'react-icons/gi'
import { BsLaptop } from 'react-icons/bs'
import "./categories.css";

function Categories() {
  return (
    <>
      <ButtonGroup className='btnGroup d-flex justify-content-center'>
        <Button className="categoriesBtn" active>
          <BsLaptop className='cIcon' />
          Notebooks
        </Button>
        <Button className="categoriesBtn" active>
          <GiSmartphone className='cIcon' />
          Celulares
        </Button>
        <Button className="categoriesBtn" active>
          <FiMonitor className='cIcon' />
          Monitores
        </Button>
        <Button className="categoriesBtn" active>
          <FaHeadset className='cIcon' />
          Auriculares
        </Button>
        <Button className="categoriesBtn" active>
          <FiWatch className='cIcon' />
          Smartwatch
        </Button>
        <Button className="categoriesBtn" active>
          <FiMoreHorizontal className='cIcon' />
          Otros
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Categories;
