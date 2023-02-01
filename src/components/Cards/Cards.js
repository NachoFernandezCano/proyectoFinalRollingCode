import { Link, useParams } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './cards.css';

const Cards = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    getProduct();
  }, [page]);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const info = await axios.get('http://localhost:4000/products/products', { params: { page } });
      setPagesCount(info.data.totalPages);
      setProduct(info.data.docs)
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === 'There is nothing here') {
        setProduct([]);
      } else {
        alert('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Row xs={2} sm={3} md={3} lg={5} className='g-0 justify-content-between rowContainer' key={product._id}>
        {
          !isLoading ? (
            product.length !== 0 ? (
              product?.map((product) => (
                <Col>
                  <Card className='cardProduct'>
                      <Card.Img variant='top' className='pCardImg'
                        src={product.image.img1} />
                    <Card.Title className='cardTitle'>{product.brand}</Card.Title>
                    <Card.Text className='cardTitle text-bolder'><Link to={`/productPage/${product.id}`}>{product.name}</Link></Card.Text>
                    <Card.Body className='cardBody'>
                      <Card.Text>${product.price}</Card.Text>
                      <Card.Link href='#'>
                        <FaHeart className='favIcon' />
                      </Card.Link>
                      <Card.Link href='#'>
                        <FaShoppingCart className='cartIcon favIcon' />
                      </Card.Link>
                    </Card.Body>
                    <Link className='cardsBtn' to='/ProductPage'> Ver más </Link>
                  </Card>
                </Col>
              ))
            ) : (
              <>no hay productos para tu busqueda</>
            )
          ) : (
            <>Loading...</>
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
            <b className="fs-4">{page}</b>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === pagesCount}
            >
              {'>'}
            </Button>
          </div>
        </div>
      </Row>
    </>
  )
};

export default Cards;
