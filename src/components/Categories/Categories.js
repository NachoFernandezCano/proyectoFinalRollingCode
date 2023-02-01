import { Button, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHeadset } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import "./categories.css";

function Categories() {
  return (
    <>
      <div className='categoriesContainer'>
        <div className='btnGroupContainer'>
          <ButtonGroup className='btnGroup d-flex justify-content-center'>
              <Button className="categoriesBtn" to='/Error404' active>
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
        </div>
        
        <div className='dropdownContainer'>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown'>
              <Dropdown.Item href="#/action-1">
                <BsLaptop className='cIcon' />
                Notebooks
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <GiSmartphone className='cIcon' />
                Celulares
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FiMonitor className='cIcon' />
                Monitores
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <FaHeadset className='cIcon' />
                Auriculares
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                <FiWatch className='cIcon' />
                Smartwach
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6">
                <FiMoreHorizontal className='cIcon' />
                Otros
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Categories;
