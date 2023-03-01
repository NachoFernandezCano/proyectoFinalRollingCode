import { ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHeadset } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./categories.css";
import CategoriesPage from '../categoriesPage/categoriesPage';

function Categories() {

  return (
    <>
      <div className='categoriesContainer'>
        <div className='btnGroupContainer'>
          <ButtonGroup className='btnGroup d-flex justify-content-center'>
            <Link className='categoriesBtn' to={"/Categories"}>
              <BsLaptop className='cIcon' />
              Notebooks
            </Link>
            <Link className='categoriesBtn'>
              <GiSmartphone className='cIcon' />
              Celulares
            </Link>
            <Link className='categoriesBtn'>
              <FiMonitor className='cIcon' />
              Monitores
            </Link>
            <Link className='categoriesBtn'>
              <FaHeadset className='cIcon' />
              Auriculares
            </Link>
            <Link className='categoriesBtn'>
              <FiWatch className='cIcon' />
              Smartwatch
            </Link>
            <Link className='categoriesBtn'>
              <FiMoreHorizontal className='cIcon' />
              Otros
            </Link>
          </ButtonGroup>
        </div>

        <div className='dropdownContainer'>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownM'>
              <Dropdown.Item>
                <Link className='catLink'>
                  <BsLaptop className='cIcon' />
                  Notebooks
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className='catLink'>
                  <GiSmartphone className='cIcon' />
                  Celulares
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className='catLink'>
                  <FiMonitor className='cIcon' />
                  Monitores
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className='catLink'>
                  <FaHeadset className='cIcon' />
                  Auriculares
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className='catLink'>
                  <FiWatch className='cIcon' />
                  Smartwach
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className='catLink'>
                  <FiMoreHorizontal className='cIcon' />
                  Otros
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Categories;
