import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/nav/nav.jsx'
import Footer from './components/footer/footer.jsx'
import Hexagon from './components/body/hexagon.jsx'

import Home from './pages/home/home.jsx'
import Awards from './pages/awards/awards.jsx'
import Interests from './pages/interests/interests.jsx'

function App() {

    const [theme, setTheme] = useState(0)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const themes = [
        {
            name: 'Purple',
            className: 'theme-purple'
        },
        {
            name: 'Green',
            className: 'theme-green'
        },
        {
            name: 'Red',
            className: 'theme-red'
        },
        {
            name: 'Gold',
            className: 'theme-gold'
        }
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
                <Route path="/skills" element={<Home />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App