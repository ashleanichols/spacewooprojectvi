import React from 'react';
import Slideshow from './Slideshow';
import MainCards from './MainCards';
import Woocard from './Woocard';

const Home = () =>{

    return(
        <>
            <div className="container-fluid">
                <div className="home-body">
                    <Slideshow />
                    <MainCards />
                    <Woocard />
                </div>
            </div>
        </>
    )
}

export default Home;
