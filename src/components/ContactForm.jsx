import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    return (
        <div>
            <h2>Contact Form</h2>

            <input
                type="text"
                value={formData.name}
                placeholder="Please Enter Your Full Name"
                onChange={(event) => setFormData({...formData, name:event.target.value})}
            />
            <br />
            <br />
            <input
                type="text"
                value={formData.email}
                placeholder="Please Enter Your E-mail"
                onChange={(event) => setFormData({...formData,email:event.target.value})}
            />
            <br />
            <br />
            <input
                type="text"
                value={formData.message}
                placeholder="Please Enter Your Message"
                onChange={(event) => setFormData({...formData,message:event.target.value})}
            />

            <p>Your Name: {formData.name}</p>
            <p>Your email: {formData.email}</p>
            <p>Your message: {formData.message}</p>
        </div>
    );
}

export default ContactForm;