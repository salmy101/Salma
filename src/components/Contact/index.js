import React, {useRef } from "react";
import "./index.scss";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";

const Contact = () => {

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Successful");
          window.location.reload(false); //reload page so the form resets
        },
        () => {
          alert("Message Faile, plz try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
           Contact
           </h1>
          <p>
            I am interested in connecting with new people and learning about new opportunities in tech. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Salma Ibrahim
          <br />
          Canada,
          <br />
          Alberta,
          <br />
          Edmonton
          <br />
          <span>
            salma.ibrahim1307@gmail.com
          </span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[53.5461, -113.4937]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[53.5461, -113.4937]}>
            <Popup>Good ol' Berta</Popup>
          </Marker>

          </MapContainer>

        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  );
};
export default Contact;