import React from 'react';
import './ContactForm.css'; // 引入同目录下的CSS文件
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

function ContactForm() {
  return (
    <section className="callback-form">
      <h2>Contact Form</h2>
      <form action="#">
        <FormInput label="Name" id="name" type="text" placeholder="Enter your name" />
        <FormInput label="Email" id="email" type="email" placeholder="Enter your email" />
        <FormInput label="Phone" id="phone" type="tel" placeholder="Enter your phone number" />
        <FormTextarea label="Your Questions?" id="questions" placeholder="Type your questions here" />
        <button type="submit">Submit Request!</button>
      </form>
    </section>
  );
}

export default ContactForm;