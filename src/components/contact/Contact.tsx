import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-25">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5907.226995249864!2d-0.12412442504542856!3d51.50068442977101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1742315462513!5m2!1str!2str"
          width="400"
          height="300"
          style={{ border: "0" }}
          className="w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-6">
          <p>
            <b>Phone</b>:XXX-XXX-XXXX
          </p>
          <p>
            <b>Email</b>: email@email.com
          </p>
          <p>
            <b>Adress</b>: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cum, incidunt!
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
