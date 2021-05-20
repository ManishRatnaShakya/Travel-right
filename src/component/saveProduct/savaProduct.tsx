import React from "react";
import {useSelector} from "react-redux";
import {ProductProcess} from "../../model/enums";
import {RootStore} from "../../store";
import SaveProductComponent from "./saveProductComponent";
import Product from "../../model/product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "react-loader-spinner";
const SavaProduct = () => {
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
  return (
    <>
   
      <div className="container-custom">
        <h1 className="">Top Rated Products</h1>

        <Carousel
          swipeable={false}
          draggable={false}
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
          {loading && productProcess === ProductProcess.LATEST_PRODUCT ? (
            <div> <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /></div>
          ) : error && productProcess === ProductProcess.LATEST_PRODUCT ? (
            <div>{error}</div>
          ) : (
            products.map((e: Product) => (
              <SaveProductComponent price={e.price} image={e.image} name={e.name} id={e._id} />
            ))
          )}
        </Carousel>
      </div>
    </>
  );
};

export default SavaProduct;
