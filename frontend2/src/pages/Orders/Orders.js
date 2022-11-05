import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './ostyle.css'

let API_URL = "http://api.prime3d.cl/"

function Orders() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // API REQUEST
    function handleApiresponse(data) {
        console.log(data)
        document.getElementsByClassName("loader")[0].style.display = "none"
    }

    var requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(API_URL + 'api/print-style', requestOptions)
        .then(response => response.json())
        .then(data => handleApiresponse(data))
        .catch(error => console.log('error', error));


    function handleButtonClick() {
        alert('Orden realizada con éxito')
    }

    function handleMouseOver(n_card) {
        document.getElementsByClassName('button')[n_card].style.display = 'block';
    }

    function handleMouseLeave(n_card) {
        document.getElementsByClassName('button')[n_card].style.display = 'none';
    }


    return (
        <div className="App-body">
            <header>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
            </header>
            <div className="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            <div className='container' on>
                <div className='box' onMouseOver={e => handleMouseOver(0)} onMouseLeave={e => handleMouseLeave(0)}>
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


                <div className='box' onMouseOver={e => handleMouseOver(1)} onMouseLeave={e => handleMouseLeave(1)}>
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



                <div className='box' onMouseOver={e => handleMouseOver(2)} onMouseLeave={e => handleMouseLeave(2)}>
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



                <div className='box' onMouseOver={e => handleMouseOver(3)} onMouseLeave={e => handleMouseLeave(3)}>
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
