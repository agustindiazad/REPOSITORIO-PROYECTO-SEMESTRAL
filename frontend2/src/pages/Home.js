import React, { useState } from 'react'
import Navbar from '../Components/Navbar/index'
import Sidebar from '../Components/Sidebar/index'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
            </header>
            <div className="App-body">
                {/* compoenente: landing */}
                <h1>Prime 3D</h1>
                <h2>Gana plata imprimiendo cuando tu quieras</h2>
                <h2>Registrate</h2>
                <h3>¿Como funciona?</h3>

                {/* componente: que buscamos */}
                <h1>que buscamos</h1>

                {/* 
                    <Componente: landing />
                    <Componente: que buscamos />
                */}
            </div>
        </div>
    );
}

export default Home;
