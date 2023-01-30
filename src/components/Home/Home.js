import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";
import adPicture from "../../assets/images/advertisement/Advertisement2.png"
import adPicture2 from "../../assets/images/advertisement/Advertisement3.png"
import adPicture3 from "../../assets/images/advertisement/Advertisement1.png"
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css"

const Home = () => {

  // const [productToShow, setProductToShow] = useState([]);
  // const [page, setPage] = useState(1);
  // const [pagesCount, setPagesCount] = useState(1);
  // const [searchFilter, setSearchFilter] = useState('');

  // useEffect(() => {
  //   handleGetProducts();
  // }, [page, searchFilter]);

  return (
    <>
      <h2>Productos</h2>
      <section id="main" className="d-flex flex-row">
        <Cards />
        <div class="advertisement d-none d-lg-flex align-items-center flex-column col-md-2 col-lg-2 p-0">
          <img
            class="publicity my-3"
            alt="Publicidad"
            src={adPicture}
          />
          <img
            class="publicity my-3"
            alt="Publicidad"
            src={adPicture2}
          />
          <img
            class="publicity my-3"
            alt="Publicidad"
            src={adPicture3}
          />
        </div>
        {/* <div className="pagination">
          <div className="paginationButton">
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {'<'}
            </Button>
            <b className="text-white fs-4">{page}</b>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === pagesCount}
            >
              {'>'}
            </Button>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Home;
