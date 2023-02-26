import { ButtonGroup } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHeadset } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./categories.css";

function Categories() {

  const [MenuProducts, setMenuProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products/products')
      .then(res => {
        setMenuProducts(res.data)
        setAllProducts(res.data)
      });
  }, [])


  const filter = (category) => {
    setMenuProducts(
      AllProducts.filter((product) => {
        if (category === 'Notebook') {
          return product.category = 'Notebook';
        } else if (category === 'Celulares') {
          return product.category = 'Celulares';
        } else if (category === 'Monitores') {
          return product.category = 'Monitores';
        }
        else if (category === 'Auriculares') {
          return product.category = 'Auriculares';
        }
        else if (category === 'Smartwatch') {
          return product.category = 'Smartwatch';
        }
        else if (category === 'Otros') {
          return product.category = 'Otros';
        }
        // else if (category === 'Todas las categorías') {
        //   return product.category > 'Todas las categorías';
        // }
      })
    );
  };

  return (
    <>
      <div className='categoriesContainer'>
        <div className='btnGroupContainer'>
          <ButtonGroup className='btnGroup d-flex justify-content-center'>
            <Link className='categoriesBtn' onClick={() => filter('Notebooks')}>
              <BsLaptop className='cIcon' />
              Notebooks
            </Link>
            <Link className='categoriesBtn' onClick={() => filter('Celulares')}>
              <GiSmartphone className='cIcon' />
              Celulares
            </Link>
            <Link className='categoriesBtn' onClick={() => filter('Monitores')}>
              <FiMonitor className='cIcon' />
              Monitores
            </Link>
            <Link className='categoriesBtn' onClick={() => filter('Auriculares')}>
              <FaHeadset className='cIcon' />
              Auriculares
            </Link>
            <Link className='categoriesBtn' onClick={() => filter('Smartwatch')}>
              <FiWatch className='cIcon' />
              Smartwatch
            </Link>
            <Link className='categoriesBtn' onClick={() => filter('Otros')}>
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
