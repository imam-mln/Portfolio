import {HashRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Skill from "./Components/Skill"
import Portfolio from "./Pages/Portfolio"
import Footer from "./Components/Footer"

function App() {
	return (
		<>
			<Navbar />
			<Home id='home' />
			<About id='about' />
			<Service id='service' />
			<Skill id='skill' />
			<div className='divider max-w-xs md:max-w-6xl mx-auto'></div>
			<Portfolio id='portfolio' />
			<Footer />
		</>
	)
}

export default App
