import React from "react";

const homeCategoryList = () => {
  return (
    <div className="banners-block column-2 px-5">
      <div className="banner text-in-left">
        <a href="shop.html">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage:
                "url( https://f.hubspotusercontent00.net/hubfs/53/image-file-extensions.jpg )",
              height: "210px",
            }}
            className="banner-bg"
          >
            <div className="caption" style={{width:'100%'}}>
              <div className="banner-info">
                <h3 className="title">
                  <strong style={{color:'white'}}>Top 100 Deals</strong>
                  <div style={{color:'white'}}> for Womens</div>
                  <div style={{color:'white'}}> Fashion</div>
                </h3>
              </div>
              <br />
              <div style={{display:'flex',justifyContent: 'center'}}>
              <span className="price" >
                <span className="start_price" style={{color:'white' ,fontWeight: 'bold'}}>Starting at</span>
                <div style={{fontSize:'20px'}}>
                Rs.1499
                </div>
              </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="banner text-in-left">
        <a href="shop.html">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage:
                "url( https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FGalleries%2F20191209094609_Tata-Altroz-front-gold.jpg&h=578&w=872&c=1)",
              height: "210px",
            }}
            className="banner-bg"
          >
            <div className="caption">
              <div className="banner-info">
                <h3 className="title">
                  <div style={{color:'white'}}> Billboard</div>
                  <div style={{color:'white'}}> Music Albums</div>
                  <br />
                  <strong style={{color:'white'}}>Carnival Time</strong> 
                </h3>
                <h4 className="subtitle" style={{color:'white'}}>Buy 3 Get 10% off</h4>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default homeCategoryList;
