import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState({ statusNo: 200, statusText: "Nothing :)" })
    const form = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading((prevState) => true)
            const response = await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBKEY)

            setTimeout(() => {
                setLoading((prevState) => false)
            }, 1200)

            setMsg((prevState) => ({
                ...prevState,
                statusNo: response.status,
                statusText: response.status === 200 ? "Message sent!" : "Failed :("
            }
            ))

            setTimeout(() => {
                form.current.reset()
                setMsg((prevState) => ({ ...prevState, statusNo: 200, statusText: "Nothing :)" }))
            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact-title__container">
                    <h1 className="title">Get In Touch</h1>
                    <div className="contact-title__chatbox">
                        <img className="contact-form-msg__img" src={`${msg.statusNo === 200 ? "src/assets/imgs/ok_msg.png" : "src/assets/imgs/error_msg.png"}`} width="210px" height="160px" />
                        <div className="contact-form-msg__text">
                            <span>&nbsp;Status:</span><br />
                            <span id="text">{msg.statusText}</span>
                        </div>
                    </div>
                </div>
                <div className="contact-form__container">
                    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                        <label>From </label>
                        <input type="email" placeholder="example@email.com" name="user_email" required />
                        <label>Name </label>
                        <input type="text" name="user_name" required />
                        <label>Message </label>
                        <textarea name="message" required rows="12" />
                        <button type="submit" disabled={loading}>Send</button>
                    </form>
                </div>
            </div>
            <div className="contact-media__container">
                <ul className="contact-media__items">
                    <li className="contact-media__item">
                        <a href="https://www.linkedin.com/in/vivian-nghi-pham-947115165/" target="_blank">
                            <span><SiLinkedin size={30} /></span> <span>linkedin.com/vivianpham0904</span>
                        </a>
                    </li>
                    <li className="contact-media__item">
                        <a href="https://github.com/gumball09" target="_blank">
                            <span><SiGithub size={30} /></span> <span>github.com/gumball09</span>
                        </a>
                    </li>
                    <li className="contact-media__item">
                        <a href="https://medium.com/@vivy.ph0909" target="_blank">
                            <span><SiMedium size={30} /></span> <span>medium.com/@vivy.ph0909</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}