import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time, carName } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <h2>
            {title}
          </h2>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Ver modelos</Link>
          </button>

            
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
