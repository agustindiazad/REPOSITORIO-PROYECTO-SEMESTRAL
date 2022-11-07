import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './ostyle.css'

let API_URL = "http://api.prime3d.cl/"

function Orders() {
    // NAVBAR
    // -------------------------------------
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // API REQUEST
    // -------------------------------------
    const [apiDone, setApiDone] = useState(false)
    // Response
    function handleapiResponse(orders) {
        console.log(orders)
        document.getElementsByClassName("loader")[0].style.display = "none"

        // this is where we will use the api response (the orders const) to create the boxes
        for (let i = 0; i < orders.length; i++) {
            // create the box insipired on this html: 
            // <div className='box' onMouseOver={e => handleMouseOver(2)} onMouseLeave={e => handleMouseLeave(2)}> <div className='box-title'> <h1>Nombre del archivo</h1> </div> </div><div className='box-content'> <h2>Ganancia: 2.500 CLP</h2> <div className='box-info'> <div className='box-attributes'> <h4>Comuna</h4> <h3>Peñololen</h3> </div> <h3>Color: Blanco</h3> </div> <div className='box-info'> <h3>Tamaño: Mediano</h3> <h3>Material: PLA</h3> </div> </div>

            let container = document.getElementsByClassName("container")[0]
            // create the box
            let box = document.createElement("div")
            box.className = "box"
            box.id = "box" + i
            box.onmouseover = function () { handleMouseOver(i) }
            box.onmouseleave = function () { handleMouseLeave(i) }
            // create
            let boxTitle = document.createElement("div")
            boxTitle.className = "box-title"
            let boxTitleH1 = document.createElement("h1")
            boxTitleH1.innerHTML = orders[i].transaction_code.substring(0, 4)

            let boxSub = document.createElement("div")
            boxSub.className = "box-sub"
            let boxSubH1 = document.createElement("h2")
            boxSubH1.innerHTML = "Ganancia: " + orders[i].size

            let boxContent = document.createElement("div")
            boxContent.className = "box-content"
            let boxInfo = document.createElement("div")
            boxInfo.className = "box-info"
            let boxAttributes = document.createElement("div")
            boxAttributes.className = "box-attributes"
            let boxAttributesH3 = document.createElement("h3")
            boxAttributesH3.innerHTML = "Comuna " + orders[i].comuna
            let boxAttributesH3_2 = document.createElement("h3")
            boxAttributesH3_2.innerHTML = "Color: " + orders[i].material_color
            let boxAttributesH3_3 = document.createElement("h3")
            boxAttributesH3_3.innerHTML = "Tamaño: " + orders[i].size
            let boxAttributesH3_4 = document.createElement("h3")
            boxAttributesH3_4.innerHTML = "Material: " + orders[i].material

            // append
            boxTitle.appendChild(boxTitleH1)
            boxSub.appendChild(boxSubH1)
            boxAttributes.appendChild(boxAttributesH3)
            boxAttributes.appendChild(boxAttributesH3_2)
            boxAttributes.appendChild(boxAttributesH3_3)
            boxAttributes.appendChild(boxAttributesH3_4)
            boxInfo.appendChild(boxAttributes)
            boxContent.appendChild(boxInfo)
            box.appendChild(boxTitle)
            box.appendChild(boxSub)
            box.appendChild(boxContent)
            container.appendChild(box)
        }
    }

    if (!apiDone) {
        // Request
        var requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(API_URL + 'api/print-style', requestOptions)
            .then(response => response.json())
            .then(data => handleapiResponse(data))
            // .then(data => setOrders(data))
            .catch(error => console.log('error', error));
        setApiDone(true)
    }


    // FUNCTIONS
    // -------------------------------------
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



            </div>
        </div>
    );
}

export default Orders;