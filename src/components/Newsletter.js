import React from "react";

const Donation = () => {
  return (
    <section
      id="newsletter"
      className="container bg-info text-center py-5 my-5"
    >
      <h2 className="pt-5">LET'S STAY IN TOUCH</h2>
      <p>Get updates on sales, specials and more</p>
      <form className="row g-3 d-flex justify-content-center pb-5">
        <div className="col-auto">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email Address"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-outline-light mb-3">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Donation;
