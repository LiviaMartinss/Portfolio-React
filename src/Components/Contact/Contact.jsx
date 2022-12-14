import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ixtvt6q', 'template_a83equa', form.current, 'NM_Z0rxuD0ePyJTRX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="Subject" name="user-subject" className="user" placeholder="Subject" />
                    <input type="text" name="user-name" className="user" placeholder="Name" />
                    <input type="Email" name="user-email" className="user" placeholder="Email" />
                    <input type="Number" name="user-number" className="user" placeholder="Number" />
                    <input type="PhoneNumber" name="user-phoneNumber" className="user" placeholder="PhoneNumber" />
                    <input type="Adress" name="user-Adress" className="user" placeholder="Adress (opitional)" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="send" className="button" />
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>

        </div>
    )
}