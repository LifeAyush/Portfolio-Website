import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6xqft8s', 'template_j7wefym', form.current, 'Y6DG1g2Zqip9Jmygx')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="(insertEmail)" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Ayush patil</h5>
            <a href="https://m.me/(insertProfileNameOnExtention)" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>   
            <h5>0112-2345-9876 (dummyNumber)</h5>
            <a href="https://api.whatsapp.com/send?phone=+(insertPhoneNo)" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
