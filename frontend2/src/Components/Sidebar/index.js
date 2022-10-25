import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap,
    SidebarLink, NavLinkr, Link, SidebarWrapper, SidebarRoute, SidebarMenu
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* <SidebarLink to='us' onClick={toggle} smooth={true} duration={1000} spy={true} exact='true' offset={-150}>
                        ¿Que hacemos?
                    </SidebarLink> */}

                    <Link href='/pedidos' style={{ textDecoration: 'none', color: 'white' }}>Encuentra pedidos</Link>
                    <SidebarLink>_________</SidebarLink>
                    <Link href='http://www.prime3d.cl/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Pagina principal</Link>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/test'>¡Conviertete en Printer!</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
