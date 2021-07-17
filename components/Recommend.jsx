const Woocard = () =>{

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <h4 className="woo-heading">Recommended For You</h4>
                {woos.map((woo,key)=>woo.type === 'recommend'?
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

export default Woocard;