import React from "react";

const Plans = () => {
  return (
    <section id="categories">
      <div className="container py-5">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="p-3 border bg-success d-flex align-items-center justify-content-around rounded">
              <h2>Bag</h2>
              <img src="./images/categories/bag.png" alt="" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 border bg-primary d-flex align-items-center justify-content-around rounded">
              <h2>Shoes</h2>
              <img src="./images/categories/shoes.png" alt="" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 border bg-warning d-flex align-items-center justify-content-around rounded">
              <h2>Watch</h2>
              <img src="./images/categories/watch.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
