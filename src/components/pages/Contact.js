import React from 'react';
import Form from '../Form/index';
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact/Refund Page</h1>
      <p onblur="validateEmail">
        <Form/>
      </p>
    </div>
  );
}
