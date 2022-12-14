import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, Logo, Logo2, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkr, NavBtinLink, NavBtn } from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            {/* <Logo2 src={require('../../../images/Logo.png')} alt='logo' /> */}
                            <Logo src={require('../../images/Logo-v4.png')} alt='logo' />
                            {/* <Logo src={require('../../../images/Logo-v3.png')} alt='logo' /> */}
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <a href='/pedidos' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Encuentra pedidos</a>
                                {/* <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-150}>¿Que hacemos?</NavLinks> */}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' >|</NavLinks>
                            </NavItem>
                            <a href='http://www.prime3d.cl/' target='_blank' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Pagina principal</a>
                        </NavMenu>
                        <NavBtn>
                            <NavBtinLink to='/test'>¡Conviertete en Printer!</NavBtinLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
