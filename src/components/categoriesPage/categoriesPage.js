import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaHeadset, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import { Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Categories from '../categories/Categories';
import Loader from '../util/loader/Loader';
import './categoriesPage.css';

const CategoriesPage = () => {
  const [data, setData] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const products = async () => {
    try {
      setIsLoading(true);
      const allProducts = await axios.get('http://localhost:4000/products/filteredProducts');
      setPagesCount(allProducts.data.totalPages);
      setData(allProducts.data);
      

      console.log(allProducts.data.docs);

      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === 'There is nothing here') {
      } else {
        alert('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };

  const category = data.filter(product =>(product.category === "Monitores"));

  // const category = data.filter((product) =>{
  // if (product.category === "Notebooks") {
  //   return product.category === "Notebooks";
  // } else if (product === "Smartwatch") {
  //   return product.category === "Smartwatch";
  // } else if (product === "Otors") {
  //   return product.category === "Otros";
  // } else if (product === "Celulares") {
  //   return product.category === "Celulares";
  // }}
  // )

  useEffect(() => {
    products();
  }, [page]);

  return (
    <>
      <h2 className='catTitle'>Categorías</h2>
      <Row xs={2} sm={3} md={3} lg={5} className='g-0 rowContainer'>
        {
          !isLoading ? (
            category !== 0 ? (
              category.map(filteredProduct => (
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
                      <Link className='cardsBtn' to='{/ProductPage/${}}'> Ver más </Link>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <>no hay productos para tu busqueda</>
            )
          ) : (
            <Loader/>
          )
        }
        <div className="pagination">
          <div className="paginationButton">
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {'<'}
            </Button>
            <b>Página {page}</b>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === pagesCount}
            >
              {'>'}
            </Button>
          </div>
        </div>
      </Row>
      <div className='categoriesContainer'>
        <div className='btnGroupContainer'>
          <ButtonGroup className='btnGroup d-flex justify-content-center'
          onClick={() => setfilterProducts(data)}
          >
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Notebooks')}>
              <BsLaptop className='cIcon' />
              Notebooks
            </Link>
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Celulares')}>
              <GiSmartphone className='cIcon' />
              Celulares
            </Link>
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Monitores')}>
              <FiMonitor className='cIcon' />
              Monitores
            </Link>
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Auriculares')}>
              <FaHeadset className='cIcon' />
              Auriculares
            </Link>
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Smartwatch')}>
              <FiWatch className='cIcon' />
              Smartwatch
            </Link>
            <Link className='categoriesBtn' onClick={(e) => filterProducts('Otros')}>
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