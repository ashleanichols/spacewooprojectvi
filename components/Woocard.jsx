import React from 'react';
import Recommend from './Recommend';
import Newarrival from './Newarrival';
import Originals from './Originals';
import Trending from './Trending';

const Woocard = () =>{
    return(
        <>
            <Recommend />
            <Newarrival />
            <Originals />
            <Trending />
        </>
    )
}

export default Woocard;
