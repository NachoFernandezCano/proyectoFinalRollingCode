import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaHeadset, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import { Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Loader from '../util/loader/Loader';
import './categoriesPage.css';

const CategoriesPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const products = async () => {
    try {
      setIsLoading(true);
      const allProducts = await axios.get('http://localhost:4000/products/products');
      setData(allProducts.data);
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === 'There is nothing here') {
      } else {
        alert('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };

  const [filterProduct, setFilterProduct] = useState(data);

  const category = (categoryItem) => {
    const result = data.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    });
    setFilterProduct(result);
  }

  useEffect(() => {
    products();
  }, []);

  return (
    <>
      <h2 className='catTitle'>Categorías</h2>
      <Row xs={2} sm={3} md={3} lg={5} className='g-0 rowContainer'>
        {
          !isLoading ? (
            filterProduct !== 0 ? (
              filterProduct.map(filteredProduct => (
                <>
                  <Col key={category}>
                    <Card className='cardProduct'>
                      <Card.Img variant='top' className='fCardImg'
                        src={filteredProduct.image.img1} />
                      <Card.Title className='cardTitle'>{filteredProduct.brand}</Card.Title>
                      <Card.Text className='cardTitle text-bolder'>{filteredProduct.name}</Card.Text>
                      <Card.Body className='cardBody'>
                        <Card.Text>${filteredProduct.price}</Card.Text>
                        <Card.Link href='#'>
                          <FaHeart className='favIcon' />
                        </Card.Link>
                        <Card.Link href='#'>
                          <FaShoppingCart className='cartIcon favIcon' />
                        </Card.Link>
                      </Card.Body>
                      <Link className='cardsBtn' to='{/${}}'> Ver más </Link>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <>no hay productos para tu busqueda</>
            )
          ) : (
            <Loader />
          )
        }
      </Row>
      <div className='categoriesContainer'>
        <div className='btnGroupContainer'>
          <ButtonGroup className='btnGroup d-flex justify-content-center'>
            <Link className='categoriesBtn' onClick={() => category("Notebooks")}>
              <BsLaptop className='cIcon' />
              Notebooks
            </Link>
            <Link className='categoriesBtn' onClick={() => category("Celulares")}>
              <GiSmartphone className='cIcon' />
              Celulares
            </Link>
            <Link className='categoriesBtn' onClick={() => category("Monitores")}>
              <FiMonitor className='cIcon' />
              Monitores
            </Link>
            <Link className='categoriesBtn' onClick={() => category("Auriculares")}>
              <FaHeadset className='cIcon' />
              Auriculares
            </Link>
            <Link className='categoriesBtn' onClick={() => category("Smartwatch")}>
              <FiWatch className='cIcon' />
              Smartwatch
            </Link>
            <Link className='categoriesBtn' onClick={() => category("Otros")}>
              <FiMoreHorizontal className='cIcon' />
              Otros
            </Link>
          </ButtonGroup>
        </div>
        {/* <div className='dropdownContainer'>
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
        </div> */}
      </div>
    </>
  );
}

export default CategoriesPage;