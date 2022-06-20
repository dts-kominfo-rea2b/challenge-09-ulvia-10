// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../components/Contact.css";

const Contact = ({data}) => {
   const {name, phone, email, photo} = data
  return (
    <>
      <div className="cardContact">
          <div>
            <div className="image">
                <img src={photo}width="20%"></img>
            </div>
            <div className="description">
              <p>{name}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
