import React from "react";
import "./Card.css";


 

const Card = () => {
  

  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=828&q=75"
            alt=""
          />
          <div className="card-details">
          <h1>Course Name:  </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="price">
          <p>50000 Rs <span>100000</span></p>
          <p>Discount <span>20%</span></p>
          </div>
          <div className="btn">
            <button id="primery" className="Primary-btn">Explore</button>
            <button id="secondary" className="Primary-btn">Enroll Now</button>

          </div>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=828&q=75"
            alt=""
          />
          <div className="card-details">
          <h1>Course Name: </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="price">
          <p>50000 Rs <span>100000</span></p>
          <p>Discount <span>20%</span></p>
          </div>
          <div className="btn">
            <button id="primery" className="Primary-btn">Explore</button>
            <button id="secondary" className="Primary-btn">Enroll Now</button>

          </div>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=828&q=75"
            alt=""
          />
          <div className="card-details">
          <h1>Course Name: </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="price">
          <p>50000 Rs <span>100000</span></p>
          <p>Discount <span>20%</span></p>
          </div>
          <div className="btn">
            <button id="primery" className="Primary-btn">Explore</button>
            <button id="secondary" className="Primary-btn">Enroll Now</button>

          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
