import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#647471] to-[#687a81] pt-24" id="contact">
            <div className="text-[#f1ecea] text-8xl font-normal font-['Eurostile'] sm:flex sm:items-center sm:justify-center font-['Eurostile'] mb-8 mt-24">
                02 [CONTACT]
            </div>
            <ContactForm />
        </div>
    );
};
