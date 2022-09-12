import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap,
    SidebarLink, NavLinkr, SidebarWrapper, SidebarRoute, SidebarMenu
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='howto' onClick={toggle} smooth={true} duration={1000} spy={true} exact='true' offset={50}>
                        Ya tengo mi diseño
                    </SidebarLink>
                    <SidebarLink to='us' onClick={toggle} smooth={true} duration={1000} spy={true} exact='true' offset={-10}>
                        Registrate
                    </SidebarLink>
                    <NavLinkr to='/tus-impresiones'>Imprime en 3D</NavLinkr>
                    <SidebarLink>
                        _________
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/imprime/paso1'>¡Conviertete en Printer!</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
