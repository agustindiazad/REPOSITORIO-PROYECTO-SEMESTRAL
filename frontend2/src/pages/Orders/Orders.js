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
    return (
        <div className="App">
            <header className="App-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className='container'>
                    <div className='box'>
                        <h1>Este es tu pedido</h1>
                        <div className='button'>
                            Realizar
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Orders;
