import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");

    return (
        <div>
             <h2>Contact Form</h2>

             <input
             type="text"
             value={name}
             placeholder="Please Enter Your Full Name"
             onChange={(event)=> setName(event.target.value)}
              />

              <p>Your Name: {name}</p>
        </div>
    );
}

export default ContactForm;