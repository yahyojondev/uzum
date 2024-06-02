import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  const API__URL = "https://dummyjson.com/products";
  useEffect(() => {
    axios
      .get(API__URL)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  });

  const cardItem = data?.map((el) => (
    <div key={el.id} className="profuct__card">
      <div className="card__img__wrapper">
        <img src={el.images[0]} alt="" />
      </div>
      <div className="product__card__content">
        <h3>{el.title}</h3>
        <div className="stock__wrapper">
          <p>{el.stock}</p>
          <p>({el.rating} sharhlar)</p>
        </div>
        <p className="moth">{el.price / 4} so'm/oyiga</p>
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 2}</del>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="product">
      <div className="container">
        <div className="product__cards">{cardItem}</div>
      </div>
    </div>
  );
};

export default Product;
