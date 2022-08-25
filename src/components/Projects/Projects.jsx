import './projects.css'
import projects from './projects.json'
import { FaPython, FaJava, FaReact } from 'react-icons/fa'
import { SiJavascript, SiDjango, SiSolidity, SiHiveBlockchain } from 'react-icons/si'
import { useState } from 'react'

const languages = [
    {
        name: "Python",
        icon: <FaPython size={20} />
    }, {
        name: "JavaScript",
        icon: <SiJavascript size={20} />
    }, {
        name: "Java",
        icon: <FaJava size={20} />
    }, {
        name: "React",
        icon: <FaReact size={20} />
    }, {
        name: "Django",
        icon: <SiDjango size={20} />
    }, {
        name: "Solidity",
        icon: <SiSolidity size={20} />
    }, {
        name: "Blockchain",
        icon: <SiHiveBlockchain size={20} />
    }
]

export default function Projects() {
    const [lang, setLang] = useState(null)

    /**
     * toggle language filter on/ off
     * @param {string} l chosen language 
     */
    const handleLangFilter = (l) => {
        if (lang) {
            if (lang === l) {
                setLang((prevState) => null)
            } else {
                setLang((prevState) => l)
            }
        } else {
            setLang((prevState) => l)
        }
    }

    return (
        <div className="projects">
            <div className="projects__container">
                <div className="projects-info">
                    <div className="typed-effect__title">
                        <h1 className="title stroke" id="project-title">Projects</h1>
                    </div>
                    <div className="projects-info__langs">
                        {languages.map((l, index) => (
                            <button
                                className={`projects-info__lang ${lang == l.name ? "highlighted-lang" : ""}`}
                                key={index}
                                onClick={() => handleLangFilter(l.name)}
                            >
                                <span>{l.icon}</span> <span>{l.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="projects-showcase__items">
                    {/* If no lang filter, only display the first 6 */}
                    {(!lang ? projects.slice(0, 6) : projects.filter((p) => p.languages.includes(lang))).map((p, index) => (
                        <div key={index} className="project-card">
                            <div className="project-card__container">
                                <div className="project-card__title title">{p.name}</div>
                                <div className="project-card__body">
                                    <div className="project-card__img" style={{ backgroundImage: `url(${p.thumbnail})` }} ></div>
                                    <div className="project-card__desc">
                                        <div>{p.desc}</div>
                                    </div>
                                </div>
                                <div className="project-card__links">
                                    {p.urls.map((pu, index) => (
                                        <button className="project-card__link" key={index}>
                                            <a href={pu.url} target="_blank">{pu.name}</a>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projects__footer">
                    <a href="https://github.com/gumball09?tab=repositories" className="projects__btn" target="_blank">View All Projects</a>
                </div>
            </div>
        </div>
    )
}