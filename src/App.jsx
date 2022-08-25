import './App.css'
import { Welcome, Story, Projects, Contact } from './components'

function Home() {
    return (
        <div className="homepage">
            <Story />
            <Projects />
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <Welcome />
                <Home />
                <Contact />
            </div>
        </div>
    )
}

export default App
