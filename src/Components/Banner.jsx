import React from 'react';
import Container from '../sheard/Container';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/z4SMbmN/img.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">DIGITAL TRANSFORMATION SERVICES</h1>
                        <p className="mb-5">DMI performs the heavy lifting associated with our customer’s mobility programs by delivering the ultimate in mobility uptime,</p>
                        
                        <Link to='/login'>
                            <button className="btn btn-outline btn-secondary text-2xl">Let's Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;