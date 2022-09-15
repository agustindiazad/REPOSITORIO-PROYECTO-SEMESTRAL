import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaInstagram, FaYoutube, FaTiktok, FaGithub } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, SocialIconLink, SocialIcons, SocialMediaWrap,
    SocialMedia, SocialLogo, WebsiteRights
} from './FooterElements';
// import { FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}

                    {/* <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Social Media </FooterLinkTitle>
                        <FooterLink to='/signin'>Support</FooterLink>
                        <FooterLink to='/signin'>Contact</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonial</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                  </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Prime 3D
                        </SocialLogo>
                        <WebsiteRights>Prime 3D © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/Infinit3D' target='_blank' aria-label='Github'>
                                {/* Si quiero que funcione el link hay que poner href='//www. ....' */}
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Tiktok'>
                                <FaTiktok />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
