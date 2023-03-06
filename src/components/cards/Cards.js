import { Link, Navigate } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Categories from '../categories/Categories';
import Loader from '../util/loader/Loader';
import Swal from 'sweetalert2';
import { useCartContext } from "../../context/cartContext";
import './cards.css';

const Cards = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const { addCartItem } = useCartContext();

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
      if (error?.response?.data?.error === 'Sin productos') {
        setProduct([]);
      } else {
        console.log('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };

  const handleGetOneProduct = (id) => {
    Navigate(`/productPage/${id}`)
  }

  const handleAddproduct = async (id) => {
    try {
      const token = localStorage.getItem('user');
      if (token) {
        const { data } = await axios.get("http://localhost:4000/user", { headers: { Authorization: token } });
        console.log(data);
        const addItem = {
          "userid": data.user._id,
          "product": id,
          "quantity": 1
        }
        console.log(addItem);
        const cart = await axios.post("http://localhost:4000/cart/createCart", addItem);
        addCartItem();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Procduto Agregado al Carrito'
        })

      } else {
        return Swal.fire({
          title: '<strong>Error</strong>',
          html: '<i>Para usar esta función primero debe iniciar sesión.</i>',
          icon: "error"
        })
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.tipoerror == "tokenno") {
        return Swal.fire({
          title: '<strong>Error</strong>',
          html: '<i>' + error.response.data.message + '</i>',
          icon: "error"
        })
      }
      if (error.response.data.tipoerror == "tokenepx") {
        return Swal.fire({
          title: '<strong>Error</strong>',
          html: '<i>' + error.response.data.message + '</i>',
          icon: "error"
        })
      }
      console.log(error);
    }

  }

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
                    <Card.Title className='mCardT'>{product.brand}</Card.Title>
                    <Card.Text className='mCardT'>{product.name}</Card.Text>
                    <Card.Body className='cardBody'>
                      <Card.Text className='mCardPrice'>${product.price}</Card.Text>
                      <Card.Link href='#'>
                        <FaHeart className='favIcon' />
                      </Card.Link>
                      <Card.Link >
                        <FaShoppingCart className='cartIcon favIcon' onClick={() => handleAddproduct(product._id)} />
                      </Card.Link>
                    </Card.Body>
                    <Link className='cardsBtn' to={`/productPage/${product._id}`}> Ver más </Link>
                  </Card>
                </Col>
              ))
            ) : (
              <>no hay productos para tu busqueda</>
            )
          ) : (
            <Loader />
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
            <b> Página {page} </b>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === pagesCount}
            >
              {'>'}
            </Button>
          </div>
        </div>
        <Categories />
      </Row>
    </>
  )
};

export default Cards;
