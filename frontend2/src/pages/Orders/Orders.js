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
                    <h1>Nombre del archivo</h1>
                    <h2>Comuna</h2>
                    <h2>Color</h2>
                    <h2>Tamaño</h2>
                    <button className='button' onClick={e => handleButtonClick()}>
                        Realizar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Orders;
