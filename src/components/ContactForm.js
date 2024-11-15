// src/components/ContactForm.js

import React from 'react';

function ContactForm() {
  return (
    <section className="callback-form">
      <h2>Contact Form</h2>
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Your Questions?" />
        <button type="submit">Submit Request!</button>
      </form>
    </section>
  );
}

export default ContactForm;