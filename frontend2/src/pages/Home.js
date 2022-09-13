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
                <p>vNam suscipit euismod nunc tincidunt lacinia. Pellentesque hendrerit eu erat nec cursus. Vivamus dictum at risus eget vulputate. Sed porttitor mi urna, vitae auctor sem iaculis et. Ut sagittis, turpis id suscipit vestibulum, leo ante gravida libero, vel auctor dolor ante sed libero. Donec bibendum condimentum ex, in aliquam ex fermentum varius. Vestibulum dignissim tellus id vulputate dignissim. Maecenas rutrum odio ligula, quis mollis leo ultricies ut. Ut vel tortor erat. Curabitur scelerisque et justo a fringilla. Curabitur eget risus odio. Duis pulvinar volutpat scelerisque. Duis sit amet urna nunc. Sed sollicitudin sagittis tortor eget sagittis.</p>

                {/* componente: que buscamos */}
                <h1>que buscamos</h1>
                <h3>Nombre  y apellido</h3>
                <input type='text'></input>
                <h3>Correo electronico</h3>
                <input type='text'></input>
                <h3>Celular (+569)</h3>
                <input type='text'></input>
                <h3>Comuna</h3>
                <input type='text'></input>
                <input type='submit'></input>


                {/* 
                    <Componente: landing />
                    <Componente: que buscamos />
                */}
            </div>
        </div>
    );
}

export default Home;
