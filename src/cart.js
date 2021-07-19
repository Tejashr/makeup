import React, { useEffect, useState } from 'react';
import { GetDetails } from './axios';
import { SemipolarLoading } from 'react-loadingg';
import img from './images/dummy.jpg'

function Cart() {

    let [item, setItem] = useState([])
    let [load,setLoad]=useState(false)

    useEffect(async () => {
        let details = await GetDetails();
        setItem(details.data)
        setLoad(true)
    }, [])

    return (
        <>
            <div className="row">
                {
                   load?( item.map((user, index) => {
                        return (
                            <div className="col-md-6 col-sm-12 col-lg-4 mt-5" >
                                <div class="card">
                                    <img class="card-img-top" style={{ height: "18rem"}} src={`${user.image_link}`} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=img}}/>
                                    <div class="card-body bg-warning">
                                        <h5 class="card-title">{user.name}</h5>{/* displaying name of the product */}
                                        <p class="card-text">{user.brand}</p>{/* displaying brand of the product */}
                                        <h6 className="card-text">Price: {user.price_sign}{user.price}</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{user.description}</li>{/* displaying description of the product */}
                                    </ul>
                                    <div class="card-footer bg-warning">
                                        <a href={`${user.product_link}`}  rel="noreferrer" target="_blank" class="card-link text-dark">Product link</a>{/* redirecting to the product link to new page */}
                                    </div>
                                </div>
                            </div>
                        )
                    })):<SemipolarLoading />
                }
            </div>

        </>
    );
}

export default Cart;