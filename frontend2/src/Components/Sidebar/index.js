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
                    <SidebarLink to='us' onClick={toggle} smooth={true} duration={1000} spy={true} exact='true' offset={-150}>
                        ¿Que hacemos?
                    </SidebarLink>
                    <SidebarLink to='register' onClick={toggle} smooth={true} duration={1000} spy={true} exact='true' offset={-150}>
                        Registrate
                    </SidebarLink>
                    <SidebarLink>_________</SidebarLink>
                    <a href='https://prime-3d.herokuapp.com/' target='_blank' style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem' }}>Imprime en 3D</a>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/test'>¡Conviertete en Printer!</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
