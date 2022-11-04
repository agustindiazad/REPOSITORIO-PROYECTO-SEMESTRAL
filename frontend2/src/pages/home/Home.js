import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './style.css'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="App">
            <div className="App-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className="landing">
                    <h2 className='subtitle'>Unete a la comunidad de Printers en</h2>
                    <h1 className='title'>Prime 3D</h1>
                </div>

                <div className="us">
                    <h2>Gana plata imprimiendo cuando tu quieras</h2>
                    {/* a youtube video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2Z4m4lnjxkY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="why">
                    <div className="why-text">
                        <h2>¿Por que Prime 3D?</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl.</h4>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl.</h4>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl vel nisl.</h4>
                    </div>

                    <div className='register'>
                        <h2 className='input-h2'>Registrate</h2>
                        <div className='inputs'>
                            <div className='input'>
                                <h3 className='input-h3'>Nombre  y apellido</h3>
                                <input type='text'></input>
                            </div>
                            <div className='input'>
                                <h3 className='input-h3'>Correo electronico</h3>
                                <input type='text'></input>
                            </div>
                            <div className='input'>
                                <h3 className='input-h3'>Celular (+569)</h3>
                                <input type='text'></input>
                            </div>
                            <div className='input'>
                                <h3 className='input-h3'>Comuna</h3>
                                <input type='text'></input>
                            </div>
                            <input type='submit'></input>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
