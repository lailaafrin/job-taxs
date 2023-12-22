import React from 'react';
import Container from './Container';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiCompanionCube } from "react-icons/gi";

const Footer = () => {
    return (
        <Container>
            <footer className="footer p-10 bg-gray-700 text-neutral-content">
                <aside>
                    <GiCompanionCube className='text-3xl' />
                    <p>SCC Thenovision Inc Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/laila-afrin-9125961b2/">
                            <FaLinkedin className='text-2xl' />
                        </a>
                            
                        
                        
                        <a href="https://www.instagram.com/laillaafrin/">
                            <FaSquareInstagram className='text-2xl' />
                        </a>
                           
                        
                        <a href="https://web.facebook.com/laila.jamal.5203">

                            <FaFacebookSquare className='text-2xl' />
                        </a>
                        <a href="https://github.com/lailaafrin">

                            <FaGithub className='text-2xl' />

                        </a>
                           
                        
                    </div>
                </nav>
            </footer>
       </Container>
    );
};

export default Footer;