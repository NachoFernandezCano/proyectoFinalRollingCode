import { Link, Navigate } from 'react-router-dom';
import { Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaHeadset } from 'react-icons/fa';
import { FiMonitor, FiWatch, FiMoreHorizontal } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../util/loader/Loader';
import Swal from 'sweetalert2';
import { useCartContext } from "../../context/cartContext";
import './cards.css';



const Cards = ({setProductQuantity}) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const { getCartCount } = useCartContext();
  const [filter, setFilterProduct] = useState(product);

  useEffect(() => {
    const algoPorAhora = async () => {
      setProductQuantity(await getCartCount())
    }
    algoPorAhora()
  }, [])
  

  useEffect(() => {
    getProduct();
  }, [page, filter]);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const info = await axios.get('http://localhost:4000/products/products', { params: { page, filter } });
      setPagesCount(info.data);
      setProduct(info.data)
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

const handleAddProduct = async (id) => {
    try {
      const token = localStorage.getItem('user');
      if (token) {
        const { data } = await axios.get("http://localhost:4000/user", { headers: { Authorization: token } });
        const addItem = {
          "userId": data.user._id,
          "productId": id,
          "quantity": 1
        }
        const cart = await axios.post("http://localhost:4000/cart/addToCart", addItem);
        setProductQuantity(await getCartCount())
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
          title: 'Producto Agregado al Carrito'
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

  const category = (categoryItem) => {
    const result = product.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    });
    setFilterProduct(result);
  }

  return (
    <>
      <Row xs={2} sm={3} md={3} lg={5} className='g-0 justify-content-between rowContainer' >
        {
          !isLoading ? (
            product !== 0 ? (
              product?.map((product) => (
                <Col key={product._id}>
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
                        <FaShoppingCart className='cartIcon favIcon' onClick={() => handleAddProduct(product._id)} />
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
              disabled={page === 2}
            >
              {'>'}
            </Button>
          </div>
        </div>
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
        </div>
      </Row>
    </>
  )
};

export default Cards;
