import './story.css'
import './timeline.css'

function Timeline() {
    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <h2 className="title">2019 - Intl. High School Student</h2>
                    <div>
                        I felt completely vague about my future as I did not know which post-secondary program to pursue. I first chose Nursing, then made a <b>life-changing decision</b> to switch to Computer Science upon graduation.
                    </div>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <div style={{
                        backgroundImage: `url('src/assets/imgs/highschool_1.jpg')`,
                        backgroundSize: "contain",
                        width: "500px",
                        height: "250px",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div>
                        Though I like Math, I had no idea how to incorporate it into coding...What I lacked at that time was the knowledge and hands-on experience with programming.
                        <br />
                        <br />
                        So I decided to pour myself into learning the basics of it, and struggled a lot as everything was self-taught.
                    </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                    <h2 className="title">2020 - Intl. Remote Computer Programming College Life</h2>
                    <div>
                        Distance learning because of COVID-19 has made it a lot more difficult for me, especially the first semester. I made <b>x10 as much the effort</b> to learn and practice until I got better results. <b>It was grinding day and night!</b>
                    </div>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <div style={{
                        backgroundImage: `url('src/assets/imgs/Presidents_Honour_List_Winter2021.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                        width: "500px",
                        height: "250px",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div>
                        With hardwork and persistence, I managed to be on the President's Honour List
                        for 3 consecutive terms!
                        <br />
                        <br />
                        <small>Links:</small>
                        <div id="president-list__items">
                            <a href="src/assets/files/Presidents_Honour_List_Fall2020.pdf" target="_blank">
                                <button className="president-list__item">Fall 2020</button>
                            </a>
                            <a href="src/assets/files/Presidents_Honour_List_Winter2021.pdf" target="_blank">
                                <button className="president-list__item">Winter 2021</button>
                            </a>
                            <a href="src/assets/files/Presidents_Honour_List_Fall2021.pdf" target="_blank">
                                <button className="president-list__item">Fall 2021</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                    <h2 className="title">2021 - RBC Software Engineer Internship Offer</h2>
                    <div>
                        Landed my very first co-op at RBC as a Software Engineer, giving me the opportunity
                        to gain more knowledge and experience.
                        <br />
                        <br />
                        Worked with an amazing and supportive team, especially the manager who always encouraged
                        me to go out of my comfort zone. He also gave me advice as to what I should learn.
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Story() {
    return (
        <div id="story" className="story">
            <div className="story__container">
                <div className="typed-effect__title">
                    <h1 className="title stroke" id="story-title">My Coding Journey...</h1>
                </div>
                <Timeline />
            </div >
            <div className="button-arrows">
                <div className="button arrow-down bounce"></div>
            </div>
        </div >
    )
}