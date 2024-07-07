import React, { useState } from 'react';

export default function ContactForm() {
    const messagesURL = process.env.REACT_APP_MESSAGES;

    // store data in an object
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const res = fetch(messagesURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            if (res) {
                alert('Message sent!');
            } else {
                throw new Error('Failed to send email');
            }
        } catch(err) {
            console.error('Error occured during POST', err);
            alert('Failed to send email ):');
        }

        console.log(formData);
        console.log(messagesURL);
    };

    return (
        <div className="w-full flex justify-center items-center font-['Eurostile']">
            <form onSubmit={handleSubmit} action="/messages" method="post" className="p-8 rounded-md w-full max-w-2xl">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 text-white">FIRST NAME:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="p-2 border rounded-md bg-transparent text-white" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 text-white">LAST NAME:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="p-2 border rounded-md bg-transparent text-white" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 text-white">EMAIL:</label>
                        <input type="email" name="email" value={formData.e_address} onChange={handleChange} required className="p-2 border rounded-md bg-transparent text-white" />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 text-white">SUBJECT:</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="p-2 border rounded-md bg-transparent text-white" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 text-white">MESSAGE:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="p-2 border rounded-md h-32 bg-transparent text-white"></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="transition duration-500 hover:scale-125 bg-blue-500 text-white p-2 rounded-md">SUBMIT</button>
                </div>
            </form>
        </div>
    );
};
