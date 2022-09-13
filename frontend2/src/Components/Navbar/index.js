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
                                <NavLinks to='howto' smooth={true} duration={1000} spy={true} exact='true' offset={-50}>¿Que hacemos?</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-50}>Registrate</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' >|</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinkr to='/tus-impresiones'>Imprime en 3D</NavLinkr>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtinLink to='/imprime/paso1'>¡Conviertete en Printer!</NavBtinLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
