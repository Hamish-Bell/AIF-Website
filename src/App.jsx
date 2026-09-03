import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/nav/nav.jsx'
import Footer from './components/footer/footer.jsx'
import Hexagon from './components/body/hexagon.jsx'

import Home from './pages/home/home.jsx'
import Awards from './pages/awards/awards.jsx'
import Interests from './pages/interests/interests.jsx'
import Contact from './pages/contact/contact.jsx'

function App() {

    const [theme, setTheme] = useState(7)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const themes = [
        { name: 'Red', className: 'theme-red' },
        { name: 'Orange', className: 'theme-orange' },
        { name: 'Gold', className: 'theme-gold' },   // yellow/gold
        { name: 'Lime', className: 'theme-lime' },
        { name: 'Green', className: 'theme-green' },
        { name: 'Cyan', className: 'theme-cyan' },
        { name: 'Blue', className: 'theme-blue' },
        { name: 'Purple', className: 'theme-purple' },
        { name: 'Pink', className: 'theme-pink' },
        { name: 'Silver', className: 'theme-silver' } // neutral at end
    ]


    useEffect(() => {
        document.body.className = themes[theme].className
    }, [theme])

    return (
        <>
            <NavBar />
            <Hexagon />

            <div className="theme-dropdown">

                <button
                    className="theme-button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span className="theme-icon">🎨</span>

                    <span>{themes[theme].name}</span>

                    <span className="dropdown-arrow">
                        {dropdownOpen ? '-' : '+'}
                    </span>
                </button>

                {dropdownOpen && (
                    <div className="theme-menu">

                        {themes.map((item, index) => (
                            <button
                                key={item.name}
                                className={`theme-option ${
                                    theme === index ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setTheme(index)
                                    setDropdownOpen(false)
                                }}
                            >
                                <span
                                    className={`theme-dot ${item.name.toLowerCase()}`}
                                ></span>

                                {item.name}
                            </button>
                        ))}

                    </div>
                )}

            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/interests" element={<Interests />} />
                <Route path = '/contact' element={<Contact />} />
                
            </Routes>

            <Footer />
        </>
    )
}

export default App
