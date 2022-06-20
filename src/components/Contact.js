// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../components/Contact.css";

const Contact = ({ data }) => {
  return (
    <>
      <div className="cardContact">
          <div>
            <div className="image">
                <img src={data[0].photo} width="20%"></img>
            </div>
            <div className="description">
              <p>{data[0].name}</p>
              <p>{data[0].phone}</p>
              <p>{data[0].email}</p>
            </div>
          </div>
      </div>
      <div className="cardContact">
          <div>
            <div className="image">
            <img src={data[1].photo} width="20%"></img>
            </div>
            <div className="description">
              <p>{data[1].name}</p>
              <p>{data[1].phone}</p>
              <p>{data[1].email}</p>
            </div>
          </div>
      </div>
      <div className="cardContact">
          <div>
            <div className="image">
            <img src={data[2].photo} width="20%"></img>
            </div>
            <div className="description">
              <p>{data[2].name}</p>
              <p>{data[2].phone}</p>
              <p>{data[2].email}</p>
            </div>
          </div>
      </div>
      <div className="cardContact">
          <div>
            <div className="image">
            <img src={data[3].photo} width="20%"></img>
            </div>
            <div className="description">
              <p>{data[3].name}</p>
              <p>{data[3].phone}</p>
              <p>{data[3].email}</p>
            </div>
          </div>
      </div>
      <div className="cardContact">
          <div>
            <div className="image">
            <img src={data[4].photo} width="20%"></img>
            </div>
            <div className="description">
              <p>{data[4].name}</p>
              <p>{data[4].phone}</p>
              <p>{data[4].email}</p>
            </div>
          </div>
      </div>
      <div className="cardContact">
          <div>
            <div className="image">
            <img src={data[5].photo} width="30%"></img>
            </div>
            <div className="description">
              <p>{data[5].name}</p>
              <p>{data[5].phone}</p>
              <p>{data[5].email}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
