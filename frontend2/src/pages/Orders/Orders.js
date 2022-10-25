import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './ostyle.css'


function Orders() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    function handleButtonClick() {
        alert('Orden realizada con éxito')
    }

    function handleMouseOver() {
        console.log("funcinoa?")
        document.getElementsByClassName('button')[0].style.display = 'block';
    }

    function handleMouseLeave() {
        document.getElementsByClassName('button')[0].style.display = 'none';
    }


    return (
        <div className="App-body">
            <header>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
            </header>
            <div className='container' on>
                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>


                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>



                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>



                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>



                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>


                <div className='box' onMouseOver={e => handleMouseOver()} onMouseLeave={e => handleMouseLeave()}>
                    <div className='box-title'>
                        <h1>Nombre del archivo</h1>
                    </div>
                    <div className='box-content'>
                        <h2>Ganancia: 2.500 CLP</h2>
                        <div className='box-info'>
                            <div className='box-attributes'>
                                <h4>Comuna</h4>
                                <h3>Peñololen</h3>
                            </div>
                            <h3>Color: Blanco</h3>
                        </div>
                        <div className='box-info'>

                            <h3>Tamaño: Mediano</h3>
                            <h3>Material: PLA</h3>
                        </div>
                    </div>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Orders;
