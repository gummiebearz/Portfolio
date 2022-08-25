import './welcome.css'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5'

function MediaTag({ name, url, icon }) {
    return (
        <a className="social-media__item" href={url} target="_blank">
            <button value={name}>
                <span>{icon}</span> <span>{name}</span>
            </button>
        </a>
    )
}

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <div className="welcome-text__layout">
                    <div className="welcome-text__container">
                        <p>Hi, I'm</p>
                        <div className="typed-effect__container">
                            <h1 className="stroke">Vivian Pham</h1>
                        </div>
                    </div>
                </div>
                <div className="welcome-bio">
                    An undergraduate CS student passionate about creating applications across platforms, and
                    who will never cease to quench the thirst for knowledge.
                </div>
                <pre className="social-media__items">
                    <MediaTag name="LinkedIn" url="https://www.linkedin.com/in/vivian-nghi-pham-947115165/" icon={<AiOutlineLinkedin size={30} />} />
                    <MediaTag name="Github" url="https://github.com/gumball09" icon={<AiOutlineGithub size={30} />} />
                    <MediaTag name="Medium" url="https://medium.com/@vivy.ph0909" icon={<BsMedium size={30} />} />
                    <MediaTag name="Resume" url="/#" icon={<IoDocumentTextOutline size={30} />} />
                </pre>
            </div>
            <div className="button-arrows">
                <div className="button arrow-down bounce arrow-down"></div>
            </div>
        </div>
    )
}