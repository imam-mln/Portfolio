import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Skill from "./Components/Skill"
import Portfolio from "./Pages/Portfolio"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/service' element={<Service />} />
				<Route path='/skill' element={<Skill />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>
		</Router>
	)
}

export default App
