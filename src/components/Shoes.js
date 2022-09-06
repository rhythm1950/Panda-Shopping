import React from "react";

const Statistics = () => {
  return (
    <section id="shoes" className="shoes container py-5">
      <h2 className="pb-4">Shoes</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-lg rounded border-0 pb-3">
            <img
              src="./images/shoes/shoe-1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-5 pe-4">
              <h3>$1000</h3>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in. This content is a little bit longer.
              </p>
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-lg rounded border-0 pb-3">
            <img
              src="./images/shoes/shoe-2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-5 pe-4">
              <h3>$1000</h3>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in. This content is a little bit longer.
              </p>
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-lg rounded border-0 pb-3">
            <img
              src="./images/shoes/shoe-3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-5 pe-4">
              <h3>$1000</h3>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in. This content is a little bit longer.
              </p>
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
