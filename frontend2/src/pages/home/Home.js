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
                    <h2 className='win'>Una de las formas más faciles de ganar dinero imprimiendo en 3D</h2>
                    <div className='steps'>
                        <img src='https://images.vexels.com/media/users/3/131133/isolated/preview/00c82f8151477cf6cabea002fadf5b2b-infografia-de-caja-redonda-de-idea.png'></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/2558/2558162.png'></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/4829/4829979.png'></img>
                    </div>
                </div>
            </div>
            <div className='margen'>
                <div className="why">
                    <div className='why-col'>
                        <div className="why-title">
                            <h2>¿Por que Prime 3D?</h2>
                        </div>
                        <div className='why-text'>
                            <h4>La impresión 3d es una herramienta fundamental hoy en día, permite generar objetos útiles para el día a día e incluso herramientas que pueden ser utilizadas para grandes proyectos.</h4>
                            <h4>Prime 3d es ideal para aquellos/as que no poseen impresoras 3d, ya sea por sus precios o por su complicado uso. Prime busca facilitar el acceso de todas las personas aquellas estén interesadas en imprimir estos objetos y que estén dispuestos a adentrarse en este mundo.</h4>
                        </div>
                    </div>
                    <div className='img-text'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1909/1909783.png'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
