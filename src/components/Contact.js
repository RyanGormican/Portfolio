import React, {useState} from 'react';
import { toast } from 'react-toastify';
export default function Contact () {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});

const { name, email, message } = formData;

const handleChange = (e) => {
	setFormData({ ...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
	e.preventDefault();

	if (!name || !email || !message) {
		toast.error('Please fillin all fields!');
		return;
	}
	try {
		setFormData({ name: '', email: '', message: ''});
		toast.sucess('Message sent successfully!');
	} catch (error) {
		toast.error('An error occured while sending the message!');
	}
};

return (
<div>
    <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
        </div>
      </form>
</div>
);
}