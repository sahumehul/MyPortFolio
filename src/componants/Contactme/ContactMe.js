import React from 'react';
import "./Contactme.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact me</h5>
        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard iconUrl="./assets/images/mail.png" text="mehulmk9179@gmail.com"/>
                <ContactInfoCard iconUrl="./assets/images/github.png" text="https://github.com/sahumehul"/>
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe