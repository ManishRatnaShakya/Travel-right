import React from "react";
import ProductComponent from "./productSliderComponent";
import {useSelector} from "react-redux";
import {RootStore} from "../../store";
import {ProductProcess} from "../../model/enums";
import Product from "../../model/product";
import ProductSliderComponent from "./productSliderComponent";
// import SaveProductComponent from "../saveProduct/saveProductComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import { truncateSync } from "node:fs";
import Loader from "react-loader-spinner";

const ProductSlider = () => {
  const {products, loading, error, productProcess} = useSelector(
    (state: RootStore) => state.product
  );
  const responsive = {
    desktop: {
      breakpoint: {max: 2000, min: 1280},
      items: 7,
    },
    tablet: {
      breakpoint: {max: 1024, min: 500},
      items: 4,
    },
    min: {
      breakpoint: {max: 500, min: 200},
      items: 2,
    },
  };
  console.log("from products",products);
  return (
    <>
      <div className="container-custom">
        <h1>Flash Sale</h1>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-custom"
        >
          {/* product outer */}
          {loading && productProcess === ProductProcess.FETCH_FLASH ? (
            <div>  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /></div>
          ) : error && productProcess === ProductProcess.FETCH_FLASH ? (
            <div>{error}</div>
          ) : (
            products.map((e: Product) => (
              <ProductSliderComponent name={e.name} price={e.price} image={e.image} key={e._id} />
            ))
          )}
        </Carousel>
      </div>
    </>
  );
};

export default ProductSlider;
