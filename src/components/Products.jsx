import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const getProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(await response.data);
    setFilter(await response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleClick = (cat) => {
    setFilter(data.filter((item) => item.category === cat));
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            {" "}
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleClick("men's clothing")}
          >
            Mens's Category
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleClick("women's clothing")}
          >
            Women's Category
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleClick("jewelery")}
          >
            {" "}
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleClick("electronics")}
          >
            {" "}
            Electronic
          </button>
        </div>
        {filter.map((item) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.image}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">{item.price}$</p>
                    <NavLink
                      to={`products/${item.id}`}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
