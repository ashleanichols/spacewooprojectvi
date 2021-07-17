import React from 'react';
import {Link} from 'react-router-dom';
import woos from '../woos.js';

const Newarrival = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <h4 className="woo-heading">New to Space Woo</h4>
                {woos.map((woo,key)=>woo.type === 'new'?
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="card woo-card">
                            <Link to={'/detail/'+woo.id} >
                                <img src={woo.cardImg} class="card-img-top" alt="..." id={woo.id}/>
                            </Link>
                        </div> 
                    </div>:null
                )}
            </div>
        </div>
        </>
    )
}