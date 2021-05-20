import React from "react";
import {Link} from "react-router-dom";
import {core} from "../../utility/apis"
interface type {
  title: string;

}

const homeScreenCategoryComponent = ({title}: type) => {
  return (
    <div className="">
      <Link to="product-category">
        <img
          width="300"
          height="300"
          alt="image not found"
          // src={`${core}/${image}`}
          src=""
        />
        <h2 className="">{title} </h2>
      </Link>
    </div>
  );
};

export default homeScreenCategoryComponent;
